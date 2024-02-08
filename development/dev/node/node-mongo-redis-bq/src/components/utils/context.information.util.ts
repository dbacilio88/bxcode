import { MessageResponseDto } from "src/dtos/message.dto";
import * as dotenv from 'dotenv';
import { Injectable } from "@nestjs/common";
import * as fs from "fs";

@Injectable()
export class ContextInformationUtil {

    private resourcePath: string;
    private controlIndex: string;
    private properties: { [key: string]: string };

    constructor() {
        this.loadProperties()
    }

    private loadProperties(): void {
        dotenv.config();
        const propertiesFilePath = process.env.PROPERTIES_FILE_PATH
        try {
            const fileContents = fs.readFileSync(propertiesFilePath, 'utf-8');
            this.properties = this.parseProperties(fileContents);
            this.resourcePath = this.getProperty('path')
            this.controlIndex = this.getProperty('index')
        } catch (error) {
            this.properties = {};
        }
    }

    private parseProperties(fileContents: string): { [key: string]: string } {
        const properties: { [key: string]: string } = {};
        const lines = fileContents.split('\n');
        lines.forEach((line) => {
            const parts = line.split('=');
            if (parts.length === 2) {
                const key = parts[0].trim();
                const value = parts[1].trim();
                properties[key] = value;
            }
        });
        return properties;
    }

    getProperty(key: string): string | undefined {
        return this.properties[key];
    }

    getCollectionMessageError(): MessageResponseDto[] {
        const messageResponseDtoList = this.loadMessageResponse(this.resourcePath);
        return messageResponseDtoList.length === 0 ? [] : messageResponseDtoList;
    }

    findByCodeMessage(codeMessageResponse: string): MessageResponseDto {
        const collectionMessageError = this.getCollectionMessageError();
        const result = collectionMessageError.find(messageResponseDto => messageResponseDto.code === codeMessageResponse) ||
            new MessageResponseDto('-1', null, 'Code message response not mapped', 400);
        result.responseCode = result.responseCode.replace('xx', this.controlIndex);
        return result;
    }

    private loadMessageResponse(resourcePath): MessageResponseDto[] {
        try {
            const fileContents = fs.readFileSync(resourcePath, 'utf-8');
            const messageRsponse: MessageResponseDto[] = JSON.parse(fileContents);
            return messageRsponse;
        } catch (error) {           
            return [];
        }
    }

    loadDefaultMessageResponse(): MessageResponseDto[] {
        const dataMessageJson: string = '[{"code":"000","responseCode":"200.01.000","responseMessage":"Process Ok","responseHttpCode":200},{"code":"001","responseCode":"400.01.001","responseMessage":"Header Params Required","responseHttpCode":400},{"code":"002","responseCode":"400.01.002","responseMessage":"JWE Invalid format","responseHttpCode":400}]';
        try {
            const messageResponseList: MessageResponseDto[] = JSON.parse(dataMessageJson);
            return messageResponseList;
        } catch (error) {
            return [];
        }
    }
}