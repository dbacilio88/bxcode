import { Injectable } from '@nestjs/common';
import { IRepository } from 'src/components/base/repository.base';
import { InjectRepository } from '@nestjs/typeorm';
import { MongoRepository } from 'typeorm';
import { StatusDocument } from '../status.document';

@Injectable()
export class StatusRepository implements IRepository<StatusDocument> {

    constructor(
        @InjectRepository(StatusDocument) private repository: MongoRepository<StatusDocument>
    ) {
    }

    findAll(query?: any): Promise<StatusDocument[]> {
        return this.repository.find(query);
    }

    create(document: StatusDocument): Promise<StatusDocument> {
        return this.repository.save(document);
    }

    findById(id: string): Promise<StatusDocument> {
        return this.repository.findOne({
            where: { _id: id }
        })
    }

    findOne(query: any): Promise<StatusDocument> {
        return this.repository.findOne({
            where: query
        })
    }

    update(id: string, document: StatusDocument): Promise<any> {
        return this.repository.update(id, document);

    }

    remove(id: string): Promise<any> {
        return this.repository.delete(id);
    }
} 