
import { Mapper } from "@automapper/core";
import { InjectMapper } from "@automapper/nestjs";
import { PersonDto } from "../../dtos";
import { Injectable } from "@nestjs/common";
import { MapperBase } from "../base/mapper.base";
import { PersonEntity } from "src/repositories/entities/person.entity";


@Injectable()
export class PersonMapper extends MapperBase<PersonEntity, PersonDto> {

    constructor(@InjectMapper() private mapper: Mapper) {
        super(mapper);
    }


    override  mapToDtoAsync(entity: PersonEntity): Promise<PersonDto> {
        return this.mapper.mapAsync<PersonEntity, PersonDto>(entity, PersonEntity, PersonDto);
    }

    override mapToEntityAsync(dto: PersonDto): Promise<PersonEntity> {
        return this.mapper.mapAsync<PersonDto, PersonEntity>(dto, PersonDto, PersonEntity);
    }

    override mapToDtosAsync(entities: PersonEntity[]): Promise<PersonDto[]> {
        console.log(entities)
        const dtos = this.mapper.mapArrayAsync<PersonEntity, PersonDto>(entities, PersonEntity, PersonDto);
        console.log(dtos)
        return dtos;
    }

    override mapToEntitiesAsync(dtos: PersonDto[]): Promise<PersonEntity[]> {
        return this.mapper.mapArrayAsync<PersonDto, PersonEntity>(dtos, PersonDto, PersonEntity);
    }

    override  mapToDto(entity: PersonEntity): PersonDto {
        return this.mapper.map<PersonEntity, PersonDto>(entity, PersonEntity, PersonDto);
    }

    override mapToEntity(dto: PersonDto): PersonEntity {
        return this.mapper.map<PersonDto, PersonEntity>(dto, PersonDto, PersonEntity);
    }

    override mapToDtos(entities: PersonEntity[]): PersonDto[] {
        const dtos = this.mapper.mapArray<PersonEntity, PersonDto>(entities, PersonEntity, PersonDto);
        return dtos;
    }

    override mapToEntities(dtos: PersonDto[]): PersonEntity[] {
        return this.mapper.mapArray<PersonDto, PersonEntity>(dtos, PersonDto, PersonEntity);
    }
}