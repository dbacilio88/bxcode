import { AutoMap } from "@automapper/classes";
import { ApiProperty } from "@nestjs/swagger";
import { ObjectId } from "mongodb";
import { Column, Entity, Generated, ObjectIdColumn } from "typeorm";



@Entity()
export class DocumentBase {
    @AutoMap()
    @ObjectIdColumn()
    _id: ObjectId

    @AutoMap()
    @ApiProperty({
        description: "uuid",
        example: "39b7a713-550e-4e26-be8b-d7abeb0ad40d"
    })


    @Column('uuid', {
        nullable: false,
        unique: true,
        comment: "code uuid generate authomatic"
    })
    uuid: string

}