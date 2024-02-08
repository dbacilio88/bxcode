import { AutoMap } from "@automapper/classes";
import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";
import { DtoBase } from "src/components/base/dto.base";

export class StatusDto extends DtoBase {

    @IsString()
    @ApiProperty({
        description: 'person´s document',
        example: '44910167',
        nullable: true,
        uniqueItems: true,
        maxLength: 8,
        minLength: 8
    })
    @AutoMap()

    code: string

    @IsString()
    @ApiProperty({
        description: 'person´s document',
        example: '44910167',
        nullable: true,
        uniqueItems: true,
        maxLength: 8,
        minLength: 8
    })
    @AutoMap()

    name: string
    @IsString()
    @ApiProperty({
        description: 'person´s document',
        example: '44910167',
        nullable: true,
        uniqueItems: true,
        maxLength: 8,
        minLength: 8
    })
    @AutoMap()

    decription: string

}