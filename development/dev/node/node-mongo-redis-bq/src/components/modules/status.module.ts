import { Module } from "@nestjs/common";
import { TypeOrmModule } from '@nestjs/typeorm';
import { PersonMapper } from "../mappers/person.mapper";
import { PersonProfile } from "../mappers/person.profile";
import { ContextInformationUtil } from "../utils/context.information.util";
import { BusinessResponse } from "src/dtos/response/businnes.response";
import { PersonController } from "src/api/controllers/person.controller";
import { PersonService } from "src/api/services/person.service";
import { PersonRepository } from "src/api/documents/contracts/person.repository";
import { StatusDocument } from "src/api/documents/status.document";
import { StatusRepository } from "src/api/documents/contracts/status.repository";
import { StatusMapper } from "../mappers/status.mapper";
import { StatusProfile } from "../mappers/status.profile";

@Module({
    imports: [
        TypeOrmModule.forFeature([StatusDocument])
    ],
    controllers: [],
    providers: [StatusRepository, StatusMapper, StatusProfile, ContextInformationUtil, BusinessResponse]
})
export class StatusModule { }