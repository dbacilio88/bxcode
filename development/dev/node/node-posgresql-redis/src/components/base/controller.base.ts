import { Logger } from "@nestjs/common";
import { v4 as uuidv4 } from 'uuid';


export class ControllerBase {
    
    private readonly _logger = new Logger(ControllerBase.name);

    private readonly _id: string;

    constructor(private nameController: string) {
        this._id = uuidv4();
        this._logger.log('controller name: ' + this.nameController + " " + this._id)
    }

}