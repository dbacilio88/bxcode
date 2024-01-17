import { ResponseBase } from "src/components/base/index.base";

export class GenericResponse<D> extends ResponseBase {
    private data: D

}