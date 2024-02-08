package com.bxcode.tools.excel.helpers;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.apache.poi.xssf.usermodel.XSSFColor;
import org.apache.poi.xssf.usermodel.XSSFFont;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;

/**
 * CreateFontsHelper
 * <p>
 * CreateFontsHelper class.
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
@NoArgsConstructor
public class CreateFontsHelper {

    private short size;
    private short color;
    private String font;
    private boolean italic;
    private boolean bold;


    public XSSFFont createHeadersFont(XSSFWorkbook workbook) {
        XSSFFont font = workbook.createFont();
        font.setFontHeightInPoints((short) 14);
        font.setFontName("Arial");
        font.setColor((short) 1);
        font.setItalic(false);
        font.setBold(true);
        return font;
    }

}


