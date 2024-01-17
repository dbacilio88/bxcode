import { Module } from "@nestjs/common";
import { MapperProvider } from "./mapper.provider";

@Module({
    imports: [...MapperProvider],
    exports: [...MapperProvider]
})
export class MapperModule { }