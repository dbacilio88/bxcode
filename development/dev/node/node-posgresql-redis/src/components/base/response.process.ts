import { ResponseBase } from "./index.base"

export class ResponseProcess {

    private responseCode: ResponseCode
    private processResult: ProcessResult
    private success: boolean
    private response: ResponseBase
    private empty: boolean

    constructor(
        responseCode: ResponseCode,
        processResult: ProcessResult,
        success: boolean,
        response: ResponseBase,
        empty: boolean
    ) {
        this.empty = empty;
        this.response = response;
        this.success = success;
        this.processResult = processResult;
        this.responseCode = responseCode;

    }

}