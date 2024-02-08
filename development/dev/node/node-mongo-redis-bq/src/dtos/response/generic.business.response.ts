import { BusinnesResponseDtoBase } from "src/components/base/busines.response.base.dto";

export class GenericBusinnesResponse<R> extends BusinnesResponseDtoBase {
    private data: R
    constructor(data: R) {
        super()
        this.data = data;
    }
}