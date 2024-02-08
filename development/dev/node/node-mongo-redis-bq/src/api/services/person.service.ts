import { Injectable } from "@nestjs/common";
import { ServiceBase } from "src/components/base/index.base";
import { PersonMapper } from "src/components/mappers/index.mapper";
import { ProcessException } from "src/components/exceptions/process.exception";
import { ResponseCode } from "src/components/enums/response.code";
import { isInValidUuId } from "src/components/validators/request.validator";
import { PersonRepository } from "../documents/contracts/person.repository";
import { PersonDto } from "src/dtos/index";
import { validate } from "class-validator";
import { v4 as uuidv4 } from 'uuid';
import {
    ERROR_MESSAGE_CREATE_DOCUMENT_BAD_REQUEST,
    ERROR_MESSAGE_FIND_BY_DOCUMENT_DOCUMENT_NO_EXIST,
    ERROR_MESSAGE_FIND_BY_ID_DOCUMENT_NO_EXIST,
    ERROR_MESSAGE_FIND_BY_UUID_DOCUMENT_INVALID,
    ERROR_MESSAGE_FIND_BY_UUID_DOCUMENT_NO_EXIST
} from "src/constants/message.constant";

@Injectable()
export class PersonService extends ServiceBase {

    constructor(
        readonly repository: PersonRepository,
        readonly mapper: PersonMapper
    ) {
        super('PersonService')
        this.repository = repository;
    }

    async findAll(): Promise<any> {
        try {
            const dtos = await this.repository.findAll()
                .then((res) => {
                    return this.mapper.mapToDtos(res);
                }).catch((err) => {
                    throw new Error(err)
                });
            return dtos;
        } catch (error) {
            return error;
        }
    };


    async findById(id: string): Promise<any> {
        try {
            const dto = await this.repository.findById(id)
                .then((res) => {
                    if (!res) {
                        throw new ProcessException(ERROR_MESSAGE_FIND_BY_ID_DOCUMENT_NO_EXIST, ResponseCode.NOT_FOUND_DOCUMENT_ID);
                    }
                    return this.mapper.mapToDto(res);
                }).catch((error) => {
                    throw error;
                });

            return dto;
        } catch (error) {
            throw error;
        }
    };

    async findByUuId(uuid: any): Promise<any> {
        try {
            if (isInValidUuId(uuid)) {
                throw new ProcessException(ERROR_MESSAGE_FIND_BY_UUID_DOCUMENT_INVALID, ResponseCode.INVALID_REQUEST_DOCUMENT_UUID);
            }

            const dto = await this.repository.findOne({ uuid: uuid })
                .then((res) => {
                    if (!res) {
                        throw new ProcessException(ERROR_MESSAGE_FIND_BY_UUID_DOCUMENT_NO_EXIST, ResponseCode.NOT_FOUND_DOCUMENT_UUID);
                    }
                    return this.mapper.mapToDto(res);
                }).catch((error) => {
                    throw error;
                });
            return dto;
        } catch (error) {
            throw error;
        }
    };



    async create(dto: PersonDto): Promise<any> {

        let query = dto.document;

        try {
            const result = await this.repository.findOne({ document: query })
                .then(async (res) => {
                    if (res) {
                        throw new ProcessException(ERROR_MESSAGE_FIND_BY_DOCUMENT_DOCUMENT_NO_EXIST, ResponseCode.REQUEST_DOCUMENT_EXIST);
                    }

                    const document = this.mapper.mapToEntity(dto);

                    document.uuid = uuidv4();

                    const valdiate = await validate(document);

                    if (valdiate.length > 0) {
                        this._logger.debug(valdiate)
                        throw new ProcessException(ERROR_MESSAGE_CREATE_DOCUMENT_BAD_REQUEST, ResponseCode.REQUEST_DOCUMENT_EXIST);
                    }

                    return await this.repository.create(document).then((res) => {
                        return this.mapper.mapToDto(res);
                    }).catch((error) => {
                        throw error;
                    });
                }).catch((error) => {
                    throw error;
                });



            return result;
        } catch (error) {
            throw error;
        }
    };

    async update(uuid: string, dto: PersonDto): Promise<any> {
        try {

            if (isInValidUuId(uuid)) {
                throw new ProcessException(ERROR_MESSAGE_FIND_BY_UUID_DOCUMENT_INVALID, ResponseCode.INVALID_REQUEST_DOCUMENT_UUID);
            }

            const document = this.mapper.mapToEntity(dto);

            const temp = await this.repository.findOne({ uuid: uuid })
                .then((res) => {
                    if (!res) {
                        throw new ProcessException(ERROR_MESSAGE_FIND_BY_UUID_DOCUMENT_NO_EXIST, ResponseCode.NOT_FOUND_DOCUMENT_UUID);
                    }
                    return res;
                }).catch((error) => {
                    throw error;
                });

            document._id = temp._id;
            document.uuid = temp.uuid;

            const result = this.repository.create(document)
                .then((res) => {
                    return this.mapper.mapToDto(res);
                }).catch((error) => {
                    throw error;
                })
            return result;
        } catch (error) {
            throw error;
        }
    };
    async remove(uuid: string) {
        try {
            if (isInValidUuId(uuid)) {
                throw new ProcessException(ERROR_MESSAGE_FIND_BY_UUID_DOCUMENT_INVALID, ResponseCode.INVALID_REQUEST_DOCUMENT_UUID);
            }
            const temp = await this.repository.findOne({ uuid: uuid })
                .then((res) => {
                    if (!res) {
                        throw new ProcessException(ERROR_MESSAGE_FIND_BY_UUID_DOCUMENT_NO_EXIST, ResponseCode.NOT_FOUND_DOCUMENT_UUID);
                    }
                    return res;
                }).catch((error) => {
                    throw error;
                });

            const result = await this.repository.remove(temp._id.toString())
                .then((res) => {
                    return this.mapper.mapToDto(res);
                }).catch((error) => {
                    throw error;
                })
            return result;
        } catch (error) {
            throw error;
        }
    };


}