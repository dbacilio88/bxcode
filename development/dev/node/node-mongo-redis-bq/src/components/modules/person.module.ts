import { Module } from "@nestjs/common";
import { TypeOrmModule } from '@nestjs/typeorm';
import { PersonMapper, PersonProfile } from "../mappers/index.mapper";
import { ContextInformationUtil } from "../utils/context.information.util";
import { BusinessResponse } from "src/dtos/response/businnes.response";
import { PersonDocument } from "src/api/documents/person.document";
import { PersonController } from "src/api/controllers/person.controller";
import { PersonService } from "src/api/services/person.service";
import { PersonRepository } from "src/api/documents/contracts/person.repository";

@Module({
    imports: [
        TypeOrmModule.forFeature([PersonDocument])
    ],
    controllers: [PersonController],
    providers: [PersonService, PersonMapper, PersonProfile, PersonRepository, ContextInformationUtil, BusinessResponse]
})
export class PersonModule { }