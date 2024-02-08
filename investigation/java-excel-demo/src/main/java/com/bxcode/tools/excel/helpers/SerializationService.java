package com.bxcode.tools.excel.helpers;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;

import java.lang.reflect.Type;

/**
 * SerializationService
 * <p>
 * SerializationService class.
 * <p>
 * THIS COMPONENT WAS BUILT ACCORDING TO THE DEVELOPMENT STANDARDS
 * AND THE BXCODE APPLICATION DEVELOPMENT PROCEDURE AND IS PROTECTED
 * BY THE LAWS OF INTELLECTUAL PROPERTY AND COPYRIGHT...
 *
 * @author bxcode
 * @author bacsystem.sac@gmail.com
 * @since 30/01/2024
 */
public class SerializationService implements ISerializationService {

    private Gson gson;

    public SerializationService() {
        this.gson = new GsonBuilder().create();
    }


    @Override
    public <T> T serializationFromObject(Object source, Class<T> tClass) {
        return this.gson.fromJson(this.gson.toJson(source), tClass);
    }

    @Override
    public <T> T serializationFromObject(Object source, Class<T> tClass, Gson gson) {
        return gson.fromJson(this.gson.toJson(source), tClass);
    }

    @Override
    public <T> T serializationFromObject(Object source, Type type) {
        return this.gson.fromJson(this.gson.toJson(source), type);
    }

    @Override
    public <T> T serializationFromObject(Object source, Type type, Gson gson) {
        return gson.fromJson(this.gson.toJson(source), type);
    }

    @Override
    public <T> T serializationFromJson(String json, Type type) {
        return this.gson.fromJson(json, type);
    }

    @Override
    public <T> T serializationFromJson(String json, Type type, Gson gson) {
        return gson.fromJson(json, type);
    }

    @Override
    public String serializationToJson(Object source) {
        return this.gson.toJson(source);
    }
}


