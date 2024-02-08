import { HttpStatus, Injectable } from "@nestjs/common";
import { BusinnesResponseDtoBase } from "src/components/base/busines.response.base.dto";
import { ContextInformationUtil } from "src/components/utils/context.information.util";
import { MessageResponseDto } from "../message.dto";
import { Response } from "express";

@Injectable()
export class BusinessResponse {

    constructor(
        readonly contextInformation: ContextInformationUtil
    ) {
        this.contextInformation = new ContextInformationUtil();
    }

    getResponse(response: Response, codeMessageResponse: string): Response {

        return this.getResponseSuccess(response, new BusinnesResponseDtoBase(), codeMessageResponse);
    }

    getResponseSuccess(response: Response, baseResponse: BusinnesResponseDtoBase, codeMessageResponse: string): Response {
        try {
            const messageResponseDto: MessageResponseDto = this.contextInformation.findByCodeMessage(codeMessageResponse);
            baseResponse.date = new Date();
            baseResponse.code = messageResponseDto.code;
            baseResponse.message = messageResponseDto.responseMessage;
            return response.status(messageResponseDto.responseHttpCode).send(baseResponse)
        } catch (error) {
            return response.status(HttpStatus.BAD_REQUEST)
        }
    }

}