export class BusinnesResponseDtoBase {
    public code: string;
    public message: string;
    public date: Date
    constructor(code?: string,
        message?: string,
        date?: Date) {
        this.code = code;
        this.message = message;
        this.date = date;
    }
}