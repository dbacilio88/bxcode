import { ObjectId } from "typeorm";

export interface IRepository<D> {
    create(document: D): Promise<D>;
    findAll(query?: any): Promise<D[]>;
    findById(id: string): Promise<D>;
    findOne(query: any): Promise<D>;
    update(id: string, document: D): Promise<D>;
    remove(id: string): Promise<D>;
}