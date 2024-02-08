export class MessageResponseDto {

    public code: string;
    public responseCode: string;
    public responseMessage: string;
    public responseHttpCode: number;

    constructor(code?: string,
        responseCode?: string,
        responseMessage?: string,
        responseHttpCode?: number) {
    }
}