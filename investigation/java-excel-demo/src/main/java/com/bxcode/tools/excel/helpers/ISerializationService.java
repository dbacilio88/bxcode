package com.bxcode.tools.excel.helpers;

import com.google.gson.Gson;

import java.lang.reflect.Type;

/**
 * ISerializationService
 * <p>
 * ISerializationService interface.
 * <p>
 * THIS COMPONENT WAS BUILT ACCORDING TO THE DEVELOPMENT STANDARDS
 * AND THE BXCODE APPLICATION DEVELOPMENT PROCEDURE AND IS PROTECTED
 * BY THE LAWS OF INTELLECTUAL PROPERTY AND COPYRIGHT...
 *
 * @author bxcode
 * @author bacsystem.sac@gmail.com
 * @since 30/01/2024
 */
public interface ISerializationService {

    <T> T serializationFromObject(Object source, Class<T> aClass);

    <T> T serializationFromObject(Object source, Class<T> aClass, Gson gson);

    <T> T serializationFromObject(Object source, Type type);

    <T> T serializationFromObject(Object source, Type type, Gson gson);

    <T> T serializationFromJson(String json, Type type);
    <T> T serializationFromJson(String json, Type type, Gson gson);

    String serializationToJson(Object source);
}


