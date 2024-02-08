package com.bxcode.tools.excel.dto;

import lombok.*;
import org.apache.poi.ss.usermodel.*;
import org.apache.poi.xssf.usermodel.*;

/**
 * ParameterExcelDto
 * <p>
 * ParameterExcelDto class.
 * <p>
 * THIS COMPONENT WAS BUILT ACCORDING TO THE DEVELOPMENT STANDARDS
 * AND THE BXCODE APPLICATION DEVELOPMENT PROCEDURE AND IS PROTECTED
 * BY THE LAWS OF INTELLECTUAL PROPERTY AND COPYRIGHT...
 *
 * @author bxcode
 * @author bacsystem.sac@gmail.com
 * @since 31/01/2024
 */
@Data
@Builder
@AllArgsConstructor
@ToString
public class ParameterExcelDto {

    private XSSFSheet sheet;
    private XSSFCell cell;
    private XSSFCellStyle xssfCellStyle;
    private XSSFRow row;
    private XSSFColor xssfColor;
    private XSSFFont xssfFont;


    public ParameterExcelDto() {

    }

    public void createExcel(XSSFWorkbook workbook, String sheetName, int index) {
        this.sheet = workbook.createSheet(sheetName);
        this.row = sheet.createRow(index);
    }

    public XSSFCell createCellHeader(int index) {
        XSSFCell cell = this.row.createCell(index);

        return cell;
    }

    public XSSFCellStyle createCellStyleHeaders(XSSFWorkbook workbook, ParameterStyle parameter) {

        XSSFCellStyle style = workbook.createCellStyle();
        style.setFont(createFont(workbook, parameter));
        style.setAlignment(parameter.getHorizontal());
        style.setVerticalAlignment(parameter.getVertical());
        if (Boolean.TRUE.equals(parameter.isBorder())) {
            style.setBorderTop(BorderStyle.THIN);
            style.setBorderRight(BorderStyle.THIN);
            style.setBorderBottom(BorderStyle.THIN);
            style.setBorderLeft(BorderStyle.THIN);
        }
        return style;
    }


    public XSSFFont createFont(XSSFWorkbook workbook, ParameterStyle parameter) {
        XSSFFont font = workbook.createFont();
        font.setBold(parameter.isBold());
        font.setItalic(parameter.isItalic());
        font.setFontName(parameter.getFont());
        font.setFontHeightInPoints(parameter.getSize() == 0 ? 12 : parameter.getSize());
        font.setColor(parameter.getColor() == null ? IndexedColors.BLACK1.getIndex() : parameter.getColor().getIndex());
        return font;
    }

    public XSSFCellStyle createCellStyleHeader(XSSFWorkbook workbook, ParameterStyle parameter) {

        XSSFCellStyle style = workbook.createCellStyle();
        style.setFont(createFont(workbook, parameter));
        return style;
    }

    public XSSFRow createRow(int index) {
        this.row = sheet.createRow(index);
        return this.row;
    }

    private String sheetName;
    private int index;


}


