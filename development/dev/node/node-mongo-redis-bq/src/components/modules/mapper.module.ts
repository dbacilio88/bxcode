import { Module } from "@nestjs/common";
import { MapperProvider } from "../../configurations/mapper.provider";

@Module({
    imports: [...MapperProvider],
    exports: [...MapperProvider]
})
export class MapperModule { }