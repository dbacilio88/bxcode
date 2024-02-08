import { AutoMap } from '@automapper/classes';
import { Column, Entity } from 'typeorm';
import { DocumentBase } from 'src/components/base/document.base';
import { ApiProperty } from '@nestjs/swagger';
import {
    IsNotEmpty,
    IsString,
    MaxLength,
    MinLength
} from 'class-validator';

@Entity()
export class PersonDocument extends DocumentBase {
    @ApiProperty({
        description: "document",
        example: "44910167",
        isArray: false,
        maxLength: 8,
        minLength: 8
    })

    @AutoMap()
    @Column()
    @IsNotEmpty()
    @IsString()
    @MaxLength(8)
    @MinLength(8)
    document: string;

    @ApiProperty({
        description: "name",
        example: "Christian",
        nullable: false
    })
    @AutoMap()
    @Column()
    @IsNotEmpty()
    @IsString()
    @MaxLength(50)
    name: string;
}
