import { Body, Controller, Delete, Get, Param, Post, Put, Req, Res } from '@nestjs/common';
import { ApiConsumes, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { PersonService } from '../services/person.service';
import { PersonDto } from '../../dtos';
import { ControllerBase } from 'src/components/base/index.base';
import { BusinessResponse } from 'src/dtos/response/businnes.response';
import { BusinessProcessResponse } from 'src/dtos/response/business.process.response';
import { GenericBusinnesResponse } from 'src/dtos/response/generic.business.response';
import { join } from 'path';

@ApiTags('Person')
@ApiConsumes('application/json')
@Controller('person')
export class PersonController extends ControllerBase {

    constructor(
        private readonly service: PersonService,
        readonly businessResponse: BusinessResponse) {
        super("PersonController", businessResponse)
    }

    @ApiOkResponse({
        description: 'The resource was returned successfully',
        status: 200,
        type: PersonDto,
        isArray: true
    })
    @Get('all')
    async findAll(@Req() req, @Res() res): Promise<any> {
        try {
            const dtos = await this.service.findAll();
            return this.getResponse(res, BusinessProcessResponse.setDocumentSuccessfullyResponse(new GenericBusinnesResponse(dtos)))
        } catch (error) {
            return this.getResponseError(res, error);
        }

    };

    @ApiOkResponse({
        description: 'The resource was returned successfully',
        status: 201,
        type: PersonDto,
        isArray: false
    })
    @Get('id/:id')
    async findbyId(@Req() req, @Res() res, @Param('id') id: string): Promise<any> {
        try {
            const dto = await this.service.findById(id);
            return this.getResponse(res, BusinessProcessResponse.setDocumentSuccessfullyResponse(new GenericBusinnesResponse(dto)))
        } catch (error) {          
            return this.getResponseError(res, error);
        }
    };

    @ApiOkResponse({
        description: 'The resource was returned successfully',
        status: 200,
        type: PersonDto,
        isArray: false
    })
    @Get('uuid/:uuid')
    async findbyUuId(@Req() req, @Res() res, @Param('uuid') uuid: string): Promise<any> {
        try {
            const dto = await this.service.findByUuId(uuid);
            return this.getResponse(res, BusinessProcessResponse.setDocumentSuccessfullyResponse(new GenericBusinnesResponse(dto)))
        } catch (error) {
            return this.getResponseError(res, error);
        }
    };

    @ApiOkResponse({
        description: 'The resource was returned successfully',
        status: 201,
        type: PersonDto,
        isArray: false
    })
    @Post('save')
    async save(@Req() req, @Res() res, @Body() body: PersonDto): Promise<any> {
        try {
            const dto = await this.service.create(body);
            return this.getResponse(res, BusinessProcessResponse.setDocumentSuccessfullyResponse(new GenericBusinnesResponse(dto)))
        } catch (error) {
            return this.getResponseError(res, error);
        }
    };

    @ApiOkResponse({
        description: 'The resource was returned successfully',
        status: 200,
        type: PersonDto,
        isArray: false
    })
    @Put('update/:uuid')
    async update(@Req() req, @Res() res, @Param('uuid') uuid: string, @Body() body: PersonDto) {
        try {
            const dto = await this.service.update(uuid, body);
            return this.getResponse(res, BusinessProcessResponse.setDocumentSuccessfullyResponse(new GenericBusinnesResponse(dto)))
        } catch (error) {
            return this.getResponseError(res, error);
        }
    };

    @ApiOkResponse({
        description: 'The resource was returned successfully',
        status: 201,
        type: PersonDto,
        isArray: false
    })
    @Delete('delete/:uuid')
    async delete(@Req() req, @Res() res, @Param('uuid') uuid: string) {
        try {
            const dto = await this.service.remove(uuid);
            return this.getResponse(res, BusinessProcessResponse.setDocumentSuccessfullyResponse(new GenericBusinnesResponse(dto)))
        } catch (error) {
            return this.getResponseError(res, error);
        }
    }
}