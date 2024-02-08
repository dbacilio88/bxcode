package com.bxcode.tools.excel.dto;

import lombok.*;

import java.util.List;

/**
 * DocumentDto
 * <p>
 * DocumentDto class.
 * <p>
 * THIS COMPONENT WAS BUILT ACCORDING TO THE DEVELOPMENT STANDARDS
 * AND THE BXCODE APPLICATION DEVELOPMENT PROCEDURE AND IS PROTECTED
 * BY THE LAWS OF INTELLECTUAL PROPERTY AND COPYRIGHT...
 *
 * @author bxcode
 * @author bacsystem.sac@gmail.com
 * @since 30/01/2024
 */

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
@ToString

public class DocumentDto {

    private List<HeaderDto> headers;
    private List<PersonDto> persons;
    private String document;
}


