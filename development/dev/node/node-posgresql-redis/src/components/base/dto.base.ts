import { AutoMap } from "@automapper/classes";
import { ApiProperty } from "@nestjs/swagger";

export class DtoBase {

    @ApiProperty({
        description: "person's identification",
        example: 1,
        nullable: false
    })
    @AutoMap()
    id: number

    @ApiProperty({
        description: "person's uuid",
        example: '485e2250-ab88-4356-9c70-3e591953ffad',
        nullable: false
    })
    @AutoMap()
    uuid: string
}