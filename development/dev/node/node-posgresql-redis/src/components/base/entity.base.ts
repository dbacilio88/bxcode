import { AutoMap } from "@automapper/classes";
import { ApiProperty } from "@nestjs/swagger";
import { Column, Entity, Generated, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class EntityBase {

    @AutoMap()
    @ApiProperty({
        example: 1,
        description: "Id",
        uniqueItems: true
    })
    @PrimaryGeneratedColumn('increment', {
        comment: "person's identification",
        type: "integer"
    })
    id: number

    @AutoMap()
    @ApiProperty({
        description: "uuid",
        example: "39b7a713-550e-4e26-be8b-d7abeb0ad40d"
    })
    @Generated('uuid')
    @Column('uuid', {
        nullable: false,
        unique: true,
        comment: "code uuid generate authomatic"
    })
    uuid: string
}