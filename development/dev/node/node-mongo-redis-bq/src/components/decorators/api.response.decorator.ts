import { Type, applyDecorators } from "@nestjs/common";
import { DtoBase } from "../base/dto.base";
import { ApiExtraModels, ApiOkResponse, getSchemaPath } from "@nestjs/swagger";

export const ApiOkResponseDecorator = <T extends Type<unknown>>(t: T) =>
    applyDecorators(
        ApiExtraModels(DtoBase, t),
        ApiOkResponse({
            schema: {
                allOf: [{
                    $ref: getSchemaPath(DtoBase)
                }, {
                    properties: {
                        data: {
                            type: 'object',
                            items: {
                                $ref: getSchemaPath(t)
                            },
                        
                        }
                    }
                }
                ]
            },
        },),
    )