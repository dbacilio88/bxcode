import { Mapper } from "@automapper/core";
import { Injectable } from "@nestjs/common";
import { DtoBase } from "./dto.base";
import { DocumentBase } from "./document.base";

@Injectable()
export class MapperBase<D extends DocumentBase, T extends DtoBase> {

    private readonly _mapper: Mapper;

    constructor(mapper: Mapper) {
        this._mapper = mapper;
    }

    mapToDtoAsync(document: D): Promise<T> {

        return this._mapper.mapAsync<D, T>(document, null, null)
    }

    mapToEntityAsync(dto: T): Promise<D> {
        return this._mapper.mapAsync<T, D>(dto, null, null)
    }

    mapToDtosAsync(documents: D[]): Promise<T[]> {
        return this._mapper.mapArrayAsync<D, T>(documents, null, null)
    }

    mapToEntitiesAsync(dtos: T[]): Promise<D[]> {
        return this._mapper.mapArrayAsync<T, D>(dtos, null, null)
    }

    mapToDto(document: D): T {

        return this._mapper.map<D, T>(document, null, null)
    }

    mapToEntity(dto: T): D {
        return this._mapper.map<T, D>(dto, null, null)
    }

    mapToDtos(documents: D[]): T[] {
        return this._mapper.mapArray<D, T>(documents, null, null)
    }

    mapToEntities(dtos: T[]): D[] {
        return this._mapper.mapArray<T, D>(dtos, null, null)
    }
}