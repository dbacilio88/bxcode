import { Mapper, MappingProfile, createMap } from "@automapper/core";
import { AutomapperProfile, InjectMapper } from "@automapper/nestjs";
import { Injectable } from "@nestjs/common";
import { PersonDto } from "src/dtos";
import { PersonEntity } from "src/repositories/entities/person.entity";

@Injectable()
export class PersonProfile extends AutomapperProfile {

    constructor(@InjectMapper() mapper: Mapper) {
        super(mapper);
    }

    get profile(): MappingProfile {
        return (mapper: Mapper) => {
            createMap(mapper, PersonEntity, PersonDto)
            createMap(mapper, PersonDto, PersonEntity)
        }
    }
}