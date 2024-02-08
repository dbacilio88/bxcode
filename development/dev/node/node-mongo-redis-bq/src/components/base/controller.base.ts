import { Logger } from "@nestjs/common";
import { v4 as uuidv4 } from 'uuid';
import { BusinessResponse } from "src/dtos/response/businnes.response";
import { BusinessProcessResponse } from "src/dtos/response/business.process.response";
import { Response } from "express";
import { ProcessException } from "../exceptions/process.exception";


export class ControllerBase {

    private readonly _logger = new Logger(ControllerBase.name);
    private readonly _id: string;

    constructor(
        private name: string,
        readonly businessResponse: BusinessResponse
    ) {
        this._id = uuidv4();
        this._logger.log('controller name: ' + this.name + " " + this._id)
    }

    public getResponseError(response: Response, err: any): Response {
        const responseCode = err instanceof ProcessException ? err.responseCode : null;
        return this.businessResponse.getResponse(response, responseCode);
    }

    public getResponse(response: Response, businessProcessResponse: BusinessProcessResponse): Response {
        if (businessProcessResponse.isErrorProcessResponse()
            && businessProcessResponse.businessResponse === null
            || businessProcessResponse.isEmptySuccessfullyResponse()) {
            return this.businessResponse.getResponse(response, businessProcessResponse.responseCode);
        }

        return this.businessResponse.getResponseSuccess(response, businessProcessResponse.businessResponse, businessProcessResponse.responseCode);
    }
}