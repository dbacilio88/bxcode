import { Module } from "@nestjs/common";
import { TypeOrmModule } from '@nestjs/typeorm';
import { PersonController } from "../../controllers/person.controller";
import { PersonService } from "../../services/person.service";
import { PersonRepository } from "../../repositories/person.repository";
import { PersonEntity } from "../../repositories/entities/index.entity";
import { PersonMapper } from "../mappers/person.mapper";
import { PersonProfile } from "../mappers/person.profile";

@Module({
    controllers: [PersonController],
    providers: [PersonService, PersonMapper, PersonProfile, PersonRepository],
    imports: [
        TypeOrmModule.forFeature([PersonEntity]),
    ],
    exports: [
        TypeOrmModule
    ]
})
export class PersonModule { }