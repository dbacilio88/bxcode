import { AutoMap } from "@automapper/classes";
import { ApiProperty } from "@nestjs/swagger";
import { IsString, Min, min } from "class-validator";
import { DtoBase } from "src/components/base/dto.base";

export class PersonDto extends DtoBase {

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

    document: string

    @IsString()
    @ApiProperty({
        description: 'person´s name',
        example: 'Christian David',
        nullable: false
    })
    @AutoMap()
    name: string;

}