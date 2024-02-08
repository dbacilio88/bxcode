import { Mapper, MappingProfile, createMap } from "@automapper/core";
import { AutomapperProfile, InjectMapper } from "@automapper/nestjs";
import { Injectable } from "@nestjs/common";
import { StatusDocument } from "src/api/documents/status.document";
import { StatusDto } from "src/dtos/status.dto";


@Injectable()
export class StatusProfile extends AutomapperProfile {

    constructor(@InjectMapper() mapper: Mapper) {
        super(mapper);
    }

    get profile(): MappingProfile {
        return (mapper: Mapper) => {
            createMap(mapper, StatusDocument, StatusDto)
            createMap(mapper, StatusDto, StatusDocument)
        }
    }
}