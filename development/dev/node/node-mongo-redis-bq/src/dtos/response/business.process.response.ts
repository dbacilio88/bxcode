import { BusinnesResponseDtoBase } from "src/components/base/busines.response.base.dto";
import { ProcessResult } from "src/components/enums/process.result";
import { ResponseCode } from "src/components/enums/response.code";

export class BusinessProcessResponse {
    public responseCode: ResponseCode;
    public successfullyResponse: boolean;
    public emptySuccessfullyResponse: boolean;
    public businessResponse: BusinnesResponseDtoBase;
    public businessProcessResult: ProcessResult;


    constructor(responseCode?: ResponseCode,
        successfullyResponse?: boolean,
        emptySuccessfullyResponse?: boolean,
        businessResponse?: BusinnesResponseDtoBase,
        businessProcessResult?: ProcessResult) {

        this.responseCode = responseCode;
        this.successfullyResponse = successfullyResponse;
        this.emptySuccessfullyResponse = emptySuccessfullyResponse;
        this.businessResponse = businessResponse;
        this.businessProcessResult = businessProcessResult;
    }



    static setDocumentSuccessfullyResponse(businessResponse: BusinnesResponseDtoBase): BusinessProcessResponse {
        const businessProcessResponse = new BusinessProcessResponse();
        businessProcessResponse.responseCode = ResponseCode.PROCESS_OK;
        businessProcessResponse.successfullyResponse = true;
        businessProcessResponse.emptySuccessfullyResponse = false;
        businessProcessResponse.businessResponse = businessResponse;
        businessProcessResponse.businessProcessResult = ProcessResult.PROCESS_SUCCESS;
        return businessProcessResponse;
    }


    static setEmptySuccessfullyResponse(): BusinessProcessResponse {
        BusinnesResponseDtoBase
        const businessProcessResponse = new BusinessProcessResponse();
        businessProcessResponse.responseCode = ResponseCode.PROCESS_OK;
        businessProcessResponse.successfullyResponse = true;
        businessProcessResponse.emptySuccessfullyResponse = true;
        businessProcessResponse.businessResponse = null;
        businessProcessResponse.businessProcessResult = ProcessResult.PROCESS_SUCCESS;
        return businessProcessResponse;
    }
    static setBusinessProcessError(responseCode: ResponseCode, businessResponse?: BusinnesResponseDtoBase): BusinessProcessResponse {
        const businessProcessResponse = new BusinessProcessResponse();
        businessProcessResponse.responseCode = responseCode;
        businessProcessResponse.successfullyResponse = false;
        businessProcessResponse.emptySuccessfullyResponse = true;
        businessProcessResponse.businessResponse = businessResponse;
        businessProcessResponse.businessProcessResult = ProcessResult.PROCESS_SUCCESS;
        return businessProcessResponse;
    }

    isEmptySuccessfullyResponse(): boolean {
        return this.emptySuccessfullyResponse;
    }


    isSuccessfullyResponse(): boolean {
        return this.successfullyResponse;
    }

    isErrorProcessResponse(): boolean {
        return !this.successfullyResponse;
    }
};