import { Module } from "@nestjs/common";
import { APP_FILTER } from "@nestjs/core";
import { HttpExceptionFilter } from "../exceptions/global.exception";


@Module({
    providers: [{
        provide: APP_FILTER,
        useClass: HttpExceptionFilter
    }]
})
export class ExceptionModule { }