import { Entity, Column } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { EntityBase } from 'src/components/base/index.base';
import { AutoMap } from '@automapper/classes';


@Entity({
    name: 'persons'
})
export class PersonEntity extends EntityBase {

    @AutoMap()
    @ApiProperty({
        description: "document",
        example: "44910167"
    })
    @Column('varchar', {
        nullable: false,
        length: 8,
        comment: "person's document"
    })
    document: string;

    @AutoMap()
    @ApiProperty({
        description: "name",
        example: "Christian"
    })
    @Column('varchar', {
        nullable: true,
        length: 50,
        comment: "person's name"
    })
    name: string;
}
