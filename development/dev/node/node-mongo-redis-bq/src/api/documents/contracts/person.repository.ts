import { Injectable } from '@nestjs/common';
import { IRepository } from 'src/components/base/repository.base';
import { PersonDocument } from '../person.document';
import { InjectRepository } from '@nestjs/typeorm';
import { MongoRepository } from 'typeorm';

@Injectable()
export class PersonRepository implements IRepository<PersonDocument> {

    constructor(
        @InjectRepository(PersonDocument) private repository: MongoRepository<PersonDocument>
    ) {
    }

    findAll(query?: any): Promise<PersonDocument[]> {
        return this.repository.find(query);
    }

    create(document: PersonDocument): Promise<PersonDocument> {
        return this.repository.save(document);
    }

    findById(id: string): Promise<PersonDocument> {
        return this.repository.findOne({
            where: { _id: id }
        })
    }

    findOne(query: any): Promise<PersonDocument> {
        return this.repository.findOne({
            where: query
        })
    }

    update(id: string, document: PersonDocument): Promise<any> {
        return this.repository.update(id, document);

    }

    remove(id: string): Promise<any> {
        return this.repository.delete(id);
    }
} 