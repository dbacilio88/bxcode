import { Mapper } from "@automapper/core";
import { Injectable } from "@nestjs/common";
import { DtoBase } from "./dto.base";
import { EntityBase } from "./entity.base";

@Injectable()
export class MapperBase<E extends EntityBase, D extends DtoBase> {

    private readonly _mapper: Mapper;

    constructor(mapper: Mapper) {
        this._mapper = mapper;
    }

    mapToDtoAsync(entity: E): Promise<D> {

        return this._mapper.mapAsync<E, D>(entity, null, null)
    }

    mapToEntityAsync(dto: D): Promise<E> {
        return this._mapper.mapAsync<D, E>(dto, null, null)
    }

    mapToDtosAsync(entities: E[]): Promise<D[]> {
        return this._mapper.mapArrayAsync<E, D>(entities, null, null)
    }

    mapToEntitiesAsync(dtos: D[]): Promise<E[]> {
        return this._mapper.mapArrayAsync<D, E>(dtos, null, null)
    }

    mapToDto(entity: E): D {

        return this._mapper.map<E, D>(entity, null, null)
    }

    mapToEntity(dto: D): E {
        return this._mapper.map<D, E>(dto, null, null)
    }

    mapToDtos(entities: E[]): D[] {
        console.log(entities)
        return this._mapper.mapArray<E, D>(entities, null, null)
    }

    mapToEntities(dtos: D[]): E[] {
        return this._mapper.mapArray<D, E>(dtos, null, null)
    }

}