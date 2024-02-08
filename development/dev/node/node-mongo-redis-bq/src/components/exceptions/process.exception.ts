import { HttpException } from "@nestjs/common";
import { ResponseCode } from "../enums/response.code";

export class ProcessException extends HttpException {

    
    responseCode: ResponseCode;

    constructor(message: string, responseCode: ResponseCode, status?: number,) {
        super(message, status);
        this.responseCode = responseCode;
    }
}