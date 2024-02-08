import { AutoMap } from '@automapper/classes';
import { Column, Entity } from 'typeorm';
import { DocumentBase } from 'src/components/base/document.base';
import { ApiProperty } from '@nestjs/swagger';
import {
    IsNotEmpty,
    IsString,
    MaxLength
} from 'class-validator';

@Entity()
export class StatusDocument extends DocumentBase {
    @ApiProperty({
        description: "code",
        example: "code",
        isArray: false,
        nullable: false,
        maxLength: 20,
    })

    @AutoMap()
    @Column()
    @IsNotEmpty()
    @IsString()
    @MaxLength(20)
    code: string;

    @ApiProperty({
        description: "name",
        example: "name",
        nullable: false,
        maxLength: 20
    })
    @AutoMap()
    @Column()
    @IsNotEmpty()
    @IsString()
    @MaxLength(20)
    name: string;

    @ApiProperty({
        description: "description",
        example: "description",
        nullable: false,
        maxLength: 100
    })
    @AutoMap()
    @Column()
    @IsNotEmpty()
    @IsString()
    @MaxLength(100)
    description: string;
}

