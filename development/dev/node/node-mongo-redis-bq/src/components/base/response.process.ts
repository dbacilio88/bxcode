import { ProcessResult } from "../enums/process.result"
import { ResponseCode } from "../enums/response.code"
import { BusinnesResponseDtoBase } from "./busines.response.base.dto"

export class ResponseProcess {

    private responseCode: ResponseCode
    private processResult: ProcessResult
    private success: boolean
    private response: BusinnesResponseDtoBase
    private empty: boolean

    constructor(
        responseCode: ResponseCode,
        processResult: ProcessResult,
        success: boolean,
        response: BusinnesResponseDtoBase,
        empty: boolean
    ) {
        this.empty = empty;
        this.response = response;
        this.success = success;
        this.processResult = processResult;
        this.responseCode = responseCode;
    }
}