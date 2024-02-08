package com.bxcode.tools.excel.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.ToString;
import org.apache.poi.ss.usermodel.HorizontalAlignment;
import org.apache.poi.ss.usermodel.IndexedColors;
import org.apache.poi.ss.usermodel.VerticalAlignment;

/**
 * ParameterStyle
 * <p>
 * ParameterStyle class.
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
public class ParameterStyle {
    private short size;
    private HorizontalAlignment horizontal;
    private VerticalAlignment vertical;
    private IndexedColors color;
    private int underLine;
    private String font;
    private boolean italic;
    private boolean bold;
    private boolean border;
}


