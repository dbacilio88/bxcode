import { AutoMap } from "@automapper/classes";
import { ApiProperty } from "@nestjs/swagger";
export class DtoBase {
    @ApiProperty({
        description: "person's identification",
        example: '65c1210cd6b60ea401d95fdb',
        nullable: false
    })
    @AutoMap()
    id: string

    @ApiProperty({
        description: "person's uuid",
        example: '822a151d-0de6-4879-ab9f-6a1931179722',
        nullable: false
    })
    @AutoMap()
    uuid: string
}