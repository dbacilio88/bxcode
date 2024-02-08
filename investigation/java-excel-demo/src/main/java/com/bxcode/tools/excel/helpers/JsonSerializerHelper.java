package com.bxcode.tools.excel.helpers;

import com.fasterxml.jackson.databind.JsonNode;
import com.google.gson.JsonObject;

/**
 * JsonSerializerHelper
 * <p>
 * JsonSerializerHelper class.
 * <p>
 * THIS COMPONENT WAS BUILT ACCORDING TO THE DEVELOPMENT STANDARDS
 * AND THE BXCODE APPLICATION DEVELOPMENT PROCEDURE AND IS PROTECTED
 * BY THE LAWS OF INTELLECTUAL PROPERTY AND COPYRIGHT...
 *
 * @author bxcode
 * @author bacsystem.sac@gmail.com
 * @since 30/01/2024
 */
public class JsonSerializerHelper {

    public static String getJsonString(final JsonObject object, final String fieldName) {
        if (object.has(fieldName) && !object.get(fieldName).isJsonNull()) {
            return object.get(fieldName).getAsString();
        }
        return null;
    }

    public static Integer getJsonInteger(final JsonObject object, final String fieldName) {
        if (object.has(fieldName) && !object.get(fieldName).isJsonNull()) {
            return object.get(fieldName).getAsInt();
        }
        return null;
    }

    public static String getJsonString(final JsonNode jsonNode, final String fieldName) {
        if (jsonNode.has(fieldName) && !jsonNode.get(fieldName).isNull()) {
            return jsonNode.get(fieldName).asText();
        }
        return null;
    }

    public static Integer getJsonInteger(final JsonNode jsonNode, final String fieldName) {
        if (jsonNode.has(fieldName) && !jsonNode.get(fieldName).isNull()) {
            return jsonNode.get(fieldName).asInt();
        }
        return null;
    }
}


