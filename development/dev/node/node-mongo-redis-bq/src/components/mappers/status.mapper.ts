
import { Mapper } from "@automapper/core";
import { InjectMapper } from "@automapper/nestjs";
import { Injectable } from "@nestjs/common";
import { MapperBase } from "../base/mapper.base";
import { StatusDocument } from "src/api/documents/status.document";
import { StatusDto } from "src/dtos/status.dto";

@Injectable()
export class StatusMapper extends MapperBase<StatusDocument, StatusDto> {

    constructor(@InjectMapper() private mapper: Mapper) {
        super(mapper);
    }


    override  mapToDtoAsync(entity: StatusDocument): Promise<StatusDto> {
        return this.mapper.mapAsync<StatusDocument, StatusDto>(entity, StatusDocument, StatusDto);
    }

    override mapToEntityAsync(dto: StatusDto): Promise<StatusDocument> {
        return this.mapper.mapAsync<StatusDto, StatusDocument>(dto, StatusDto, StatusDocument);
    }

    override mapToDtosAsync(entities: StatusDocument[]): Promise<StatusDto[]> {
        const dtos = this.mapper.mapArrayAsync<StatusDocument, StatusDto>(entities, StatusDocument, StatusDto);
        return dtos;
    }

    override mapToEntitiesAsync(dtos: StatusDto[]): Promise<StatusDocument[]> {
        return this.mapper.mapArrayAsync<StatusDto, StatusDocument>(dtos, StatusDto, StatusDocument);
    }

    override  mapToDto(entity: StatusDocument): StatusDto {
        return this.mapper.map<StatusDocument, StatusDto>(entity, StatusDocument, StatusDto);
    }

    override mapToEntity(dto: StatusDto): StatusDocument {
        return this.mapper.map<StatusDto, StatusDocument>(dto, StatusDto, StatusDocument);
    }

    override mapToDtos(entities: StatusDocument[]): StatusDto[] {
        const dtos = this.mapper.mapArray<StatusDocument, StatusDto>(entities, StatusDocument, StatusDto);
        return dtos;
    }

    override mapToEntities(dtos: StatusDto[]): StatusDocument[] {
        return this.mapper.mapArray<StatusDto, StatusDocument>(dtos, StatusDto, StatusDocument);
    }
}