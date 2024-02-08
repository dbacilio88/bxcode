package com.bxcode.tools.excel;

import com.bxcode.tools.excel.dto.DocumentDto;
import com.bxcode.tools.excel.dto.ParameterExcelDto;
import com.bxcode.tools.excel.dto.ParameterStyle;
import com.bxcode.tools.excel.dto.PersonDto;
import com.bxcode.tools.excel.helpers.CreateExcelHelper;
import com.bxcode.tools.excel.helpers.DeserializationService;
import com.bxcode.tools.excel.helpers.ISerializationService;
import com.bxcode.tools.excel.helpers.SerializationService;
import org.apache.commons.codec.DecoderException;
import org.apache.commons.codec.binary.Hex;
import org.apache.poi.ss.usermodel.*;
import org.apache.poi.xssf.usermodel.*;

import java.io.*;
import java.util.Iterator;
import java.util.UUID;

/**
 * Application
 * <p>
 * Application class.
 * <p>
 * THIS COMPONENT WAS BUILT ACCORDING TO THE DEVELOPMENT STANDARDS
 * AND THE BXCODE APPLICATION DEVELOPMENT PROCEDURE AND IS PROTECTED
 * BY THE LAWS OF INTELLECTUAL PROPERTY AND COPYRIGHT...
 *
 * @author bxcode
 * @author bacsystem.sac@gmail.com
 * @since 30/01/2024
 */
public class Application {


    public Application() {

    }

    public static String readDataJson() {

        StringBuilder sb = new StringBuilder();

        try (FileReader reader = new FileReader("Persons.json"); BufferedReader br = new BufferedReader(reader)) {
            String data;
            while ((data = br.readLine()) != null) {
                sb.append(data);
            }
        } catch (IOException e) {
            System.out.println(e.getMessage());
        }

        return sb.toString();

    }

    public static void generateDocument(DocumentDto documents) {
        /**
         * HEX
         * #DAF7A6
         * #FFC300
         * #FF5733
         * #C70039
         * #900C3F
         * #581845
         */

        ParameterExcelDto excelDto = new ParameterExcelDto();

        try {

            OutputStream os = new FileOutputStream(getNameDocument());

            // step N° 1 create book: extension .xlsx
            XSSFWorkbook workbook = new XSSFWorkbook();
            int index = 0, cells = 0;

            excelDto.createExcel(workbook, "Data", index);

            // step N° 2 create sheet:
            XSSFSheet sheet = excelDto.getSheet();

            // step N° 3 create rows:
            XSSFRow row;

            for (int i = 0; i < documents.getHeaders().size(); i++) {

                // step N° 4 create cells:
                XSSFCell cell = excelDto.createCellHeader(i);

                // step N° 5 create and configuration cells style:
                cell.setCellStyle(excelDto.createCellStyleHeaders(workbook, ParameterStyle.builder()
                        .bold(true)
                        .italic(false)
                        .size((short) 14)
                        .font("Consolas")
                        .color(IndexedColors.BLUE_GREY)
                        .vertical(VerticalAlignment.CENTER)
                        .horizontal(HorizontalAlignment.CENTER)
                        .border(false)
                        .build()));


                // step N° 6 configuration of  cells values
                cell.setCellValue(documents.getHeaders().get(i).getName());
                sheet.autoSizeColumn(i);
            }


            index++;

            for (int y = 0; y < documents.getPersons().size(); y++) {

                row = sheet.createRow(index);

                row.createCell(0).setCellValue(documents.getPersons().get(y).getName());
                row.createCell(1).setCellValue(documents.getPersons().get(y).getLastname());
                row.createCell(2).setCellValue(documents.getPersons().get(y).getAge());
                sheet.autoSizeColumn(y);
                index++;
            }

            System.out.println(index);

            workbook.write(os);
            workbook.close();
            System.out.println("File generated successfully");
        } catch (IOException e) {
            System.out.println(e.getMessage());
        }
    }

    public static void readDocument() {
        try {

            FileInputStream fis = new FileInputStream("Document.xlsx");
            XSSFWorkbook workbook = new XSSFWorkbook(fis);
            Iterator<Sheet> it = workbook.sheetIterator();

            while (it.hasNext()) {
                int rows = it.next().getLastRowNum();
                System.out.println(rows);
                if (it.next().getSheetName().equals("Data")) {
                    System.out.println(it.next().getSheetName());
                }
            }
        } catch (IOException e) {
            System.out.println(e.getMessage());
        }
    }

    public static void main(String[] args) {
        ISerializationService service = new SerializationService();
        String json = readDataJson();
        DocumentDto documents = service.serializationFromJson(json, DocumentDto.class, DeserializationService.getDocumentDtoDeserializer());
        generateDocument(documents);

    }


    private static String getNameDocument() {
        //return UUID.randomUUID().toString().concat(".xlsx");
        return "hola.xlsx";//UUID.randomUUID().toString().concat(".xlsx");
    }


    public static XSSFColor getXssfColor(String colorHexadecimal) {
        try {
            byte[] rgb = Hex.decodeHex(colorHexadecimal);
            return new XSSFColor(rgb);
        } catch (DecoderException e) {
            throw new RuntimeException(e);
        }
    }

}


