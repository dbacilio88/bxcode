import { Mapper, MappingProfile, createMap } from "@automapper/core";
import { AutomapperProfile, InjectMapper } from "@automapper/nestjs";
import { Injectable } from "@nestjs/common";
import { PersonDocument } from "src/api/documents/person.document";
import { PersonDto } from "src/dtos";

@Injectable()
export class PersonProfile extends AutomapperProfile {

    constructor(@InjectMapper() mapper: Mapper) {
        super(mapper);
    }

    get profile(): MappingProfile {
        return (mapper: Mapper) => {
            createMap(mapper, PersonDocument, PersonDto)
            createMap(mapper, PersonDto, PersonDocument)
        }
    }
}