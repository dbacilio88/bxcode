import { HttpException, HttpStatus, Injectable, Logger } from "@nestjs/common";
import { InjectRepository } from '@nestjs/typeorm';
import { PersonRepository } from "../repositories/index.repository";
import { PersonDto } from "src/dtos/index";
import { ServiceBase } from "src/components/base/index.base";
import { PersonMapper } from "src/components/mappers/index.mapper";

@Injectable()
export class PersonService extends ServiceBase {

    private readonly logger = new Logger('PersonService');
    private readonly repository: PersonRepository;

    constructor(
        @InjectRepository(PersonRepository)
        repository: PersonRepository,
        readonly mapper: PersonMapper
    ) {

        super('PersonService')
        this.repository = repository;
    }


    async findAll(): Promise<PersonDto[]> {
        try {
            const entities = await this.repository.find();
            const dtos = this.mapper.mapToDtos(entities);
            return dtos;
        } catch (error) {
            return error;
        }
    }

    async findById(id: number): Promise<PersonDto> {
        try {

            const entity = await this.repository.findOne({
                where: { id: id }
            });
            const dto = this.mapper.mapToDto(entity);
            return dto;
        } catch (error) {
            return error;
        }
    }

    async findByUuId(uuid: string): Promise<PersonDto> {
        try {

            const entity = await this.repository.findOne({
                where: { uuid: uuid }
            });
            
            if (!entity) {
                throw new HttpException('User not found', HttpStatus.NOT_FOUND);
            }

            const dto = this.mapper.mapToDto(entity);

            return dto;
        } catch (error) {
            return error;
        }
    }

    async save(dto: PersonDto): Promise<PersonDto> {
        try {
            const entity = this.mapper.mapToEntity(dto);
            const result = await this.repository.save(entity);
            const dtos = this.mapper.mapToDto(result);
            return dtos;
        } catch (error) {
            return error;
        }
    }

    async update(uuid: string, dto: PersonDto): Promise<PersonDto> {
        try {

            const mapper = this.mapper.mapToEntity(dto);
            const entity = await this.repository.findOne({ where: { uuid: uuid } });

            if (!entity) {
                throw new HttpException('User not found', HttpStatus.NOT_FOUND);
            }
            entity.name = mapper.name
            entity.document = mapper.document
            const result = await this.repository.save(entity);
            const dtos = this.mapper.mapToDto(result);
            return dtos;
        } catch (error) {
            this.logger.error(error)
            return error;
        }
    }
}