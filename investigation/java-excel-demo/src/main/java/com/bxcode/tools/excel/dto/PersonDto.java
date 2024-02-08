package com.bxcode.tools.excel.dto;

import lombok.*;

/**
 * PersonDto
 * <p>
 * PersonDto class.
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
public class PersonDto {

    private String name;
    private String lastname;
    private int age;
}


