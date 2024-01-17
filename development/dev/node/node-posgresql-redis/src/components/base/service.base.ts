import { Injectable, Logger } from "@nestjs/common";
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class ServiceBase {

    private readonly _logger = new Logger(ServiceBase.name);
    private readonly _id: string;

    constructor(private nameService: string) {
        this._id = uuidv4();
        this._logger.log('service name: ' + this.nameService + " " + this._id)

    }
}

//https://www.youtube.com/watch?v=3KqdGcWeKpc logs