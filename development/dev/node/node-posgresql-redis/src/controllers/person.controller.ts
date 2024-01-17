import { Body, Controller, Get, Logger, Param, Post, Put } from '@nestjs/common';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { PersonService } from '../services/person.service';
import { PersonDto } from '../dtos';
import { ControllerBase } from 'src/components/base/index.base';

@ApiTags('Person')
@Controller('person')
export class PersonController extends ControllerBase {

    private readonly logger = new Logger('PersonController');

    constructor(
        private readonly personService: PersonService
    ) {
        super("PersonController")
    }


    @ApiOkResponse({ description: 'The resource was returned successfully', status: 200, type: PersonDto, isArray: true })
    @Get('all')
    findAll() {
        return this.personService.findAll();
    }


    @ApiOkResponse({ description: 'The resource was returned successfully', status: 201, type: PersonDto, isArray: false })
    @Post('save')
    save(@Body() body: PersonDto) {

        return this.personService.save(body);
    }

    @ApiOkResponse({ description: 'The resource was returned successfully', status: 200, type: PersonDto, isArray: false })
    @Get('id/:id')
    findbyId(@Param('id') id: number) {
        return this.personService.findById(id);
    }

    @ApiOkResponse({ description: 'The resource was returned successfully', status: 200, type: PersonDto, isArray: false })
    @Get('uuid/:uuid')
    findbyUuId(@Param('uuid') uuid: string) {
        return this.personService.findByUuId(uuid);
    }

    @ApiOkResponse({ description: 'The resource was returned successfully', status: 201, type: PersonDto, isArray: false })
    @Put('update/uuid/:uuid')
    update(@Param('uuid') uuid: string, @Body() body: PersonDto) {
        return this.personService.update(uuid, body);
    }
}