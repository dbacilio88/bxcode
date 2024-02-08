
import { Mapper } from "@automapper/core";
import { InjectMapper } from "@automapper/nestjs";
import { PersonDto } from "../../dtos";
import { Injectable } from "@nestjs/common";
import { MapperBase } from "../base/mapper.base";
import { PersonDocument } from "src/api/documents/person.document";


@Injectable()
export class PersonMapper extends MapperBase<PersonDocument, PersonDto> {

    constructor(@InjectMapper() private mapper: Mapper) {
        super(mapper);
    }


    override  mapToDtoAsync(entity: PersonDocument): Promise<PersonDto> {
        return this.mapper.mapAsync<PersonDocument, PersonDto>(entity, PersonDocument, PersonDto);
    }

    override mapToEntityAsync(dto: PersonDto): Promise<PersonDocument> {
        return this.mapper.mapAsync<PersonDto, PersonDocument>(dto, PersonDto, PersonDocument);
    }

    override mapToDtosAsync(entities: PersonDocument[]): Promise<PersonDto[]> {
        const dtos = this.mapper.mapArrayAsync<PersonDocument, PersonDto>(entities, PersonDocument, PersonDto);
        return dtos;
    }

    override mapToEntitiesAsync(dtos: PersonDto[]): Promise<PersonDocument[]> {
        return this.mapper.mapArrayAsync<PersonDto, PersonDocument>(dtos, PersonDto, PersonDocument);
    }

    override  mapToDto(entity: PersonDocument): PersonDto {
        return this.mapper.map<PersonDocument, PersonDto>(entity, PersonDocument, PersonDto);
    }

    override mapToEntity(dto: PersonDto): PersonDocument {
        return this.mapper.map<PersonDto, PersonDocument>(dto, PersonDto, PersonDocument);
    }

    override mapToDtos(entities: PersonDocument[]): PersonDto[] {
        const dtos = this.mapper.mapArray<PersonDocument, PersonDto>(entities, PersonDocument, PersonDto);
        return dtos;
    }

    override mapToEntities(dtos: PersonDto[]): PersonDocument[] {
        return this.mapper.mapArray<PersonDto, PersonDocument>(dtos, PersonDto, PersonDocument);
    }
}