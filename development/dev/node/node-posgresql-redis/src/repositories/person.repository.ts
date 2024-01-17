import { Injectable } from '@nestjs/common';
import { PersonEntity } from './entities/index.entity';
import { DataSource, Repository } from 'typeorm';

@Injectable()
export class PersonRepository extends Repository<PersonEntity> {

    constructor(readonly datasource: DataSource) {
        super(PersonEntity, datasource.createEntityManager());
    }

} 
