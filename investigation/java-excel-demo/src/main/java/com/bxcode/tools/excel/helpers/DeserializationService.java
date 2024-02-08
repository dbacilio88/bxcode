package com.bxcode.tools.excel.helpers;

import com.bxcode.tools.excel.dto.DocumentDto;
import com.bxcode.tools.excel.dto.HeaderDto;
import com.bxcode.tools.excel.dto.PersonDto;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.google.gson.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

/**
 * DeserializationService
 * <p>
 * DeserializationService class.
 * <p>
 * THIS COMPONENT WAS BUILT ACCORDING TO THE DEVELOPMENT STANDARDS
 * AND THE BXCODE APPLICATION DEVELOPMENT PROCEDURE AND IS PROTECTED
 * BY THE LAWS OF INTELLECTUAL PROPERTY AND COPYRIGHT...
 *
 * @author bxcode
 * @author bacsystem.sac@gmail.com
 * @since 30/01/2024
 */
public class DeserializationService {

    public static Gson getDocumentDtoDeserializer() {

        final GsonBuilder builder = new GsonBuilder();

        JsonDeserializer<DocumentDto> deserializer = (jsonElement, type, jsonDeserializationContext) -> {
            System.out.println("init deserializer");
            return DocumentDto.builder()
                    .persons(getPersons(jsonElement, "persons"))
                    .headers(getHeaders(jsonElement, "headers"))
                    .document(getString(jsonElement, "document"))
                    .build();

        };

        builder.registerTypeAdapter(DocumentDto.class, deserializer);
        return builder.create();

    }

    private static String getString(JsonElement jsonElement, String fieldName) {
        return JsonSerializerHelper.getJsonString(jsonElement.getAsJsonObject(), fieldName);
    }

    private static Integer getInteger(JsonElement jsonElement, String fieldName) {
        return JsonSerializerHelper.getJsonInteger(jsonElement.getAsJsonObject(), fieldName);
    }

    private static String getString(JsonNode jsonNode, String fieldName) {
        return JsonSerializerHelper.getJsonString(jsonNode, fieldName);
    }

    private static Integer getInteger(JsonNode jsonNode, String fieldName) {
        return JsonSerializerHelper.getJsonInteger(jsonNode, fieldName);
    }

    private static PersonDto getPerson(JsonNode jsonNode) {
        return PersonDto.builder()
                .name(getString(jsonNode, "name"))
                .lastname(getString(jsonNode, "lastname"))
                .age(getInteger(jsonNode, "age"))
                .build();
    }

    private static HeaderDto getHeader(JsonNode jsonNode) {
        return HeaderDto.builder()
                .name(getString(jsonNode, "name"))
                .build();
    }

    private static List<PersonDto> getPersons(JsonElement jsonElement, String fieldName) {
        final List<PersonDto> list = new ArrayList<>();
        final JsonNode jsonNode = getJsonNodeArray(jsonElement, fieldName);
        if (Boolean.TRUE.equals(isValidJsonNode(jsonNode, fieldName))) {
            for (JsonNode node : jsonNode) {
                list.add(getPerson(node));
            }
        }

        return list;
    }

    private static List<HeaderDto> getHeaders(JsonElement jsonElement, String fieldName) {
        final List<HeaderDto> list = new ArrayList<>();
        final JsonNode jsonNode = getJsonNodeArray(jsonElement, fieldName);
        if (Boolean.TRUE.equals(isValidJsonNode(jsonNode, fieldName))) {
            for (JsonNode node : jsonNode) {
                list.add(getHeader(node));
            }
        }
        return list;
    }

    private static JsonNode getJsonNodeArray(JsonElement jsonElement, String fieldName) {
        ObjectMapper mapper = new ObjectMapper();
        JsonNode jsonNodeArray = null;
        try {
            final JsonNode jsonNode = mapper.readTree(String.valueOf(jsonElement.getAsJsonObject()));
            jsonNodeArray = jsonNode.get(fieldName);
        } catch (JsonProcessingException e) {
            System.out.println(e.getMessage());
        }
        return jsonNodeArray;
    }

    private static boolean isValidJsonNode(JsonNode jsonNode, final String fieldName) {
        return Objects.nonNull(jsonNode)
                && !jsonNode.isEmpty()
                && jsonNode.isArray();
    }
}