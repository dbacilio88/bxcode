import { Module } from '@nestjs/common';
import {
  ComponentsModule,
  DatabaseModule,
  ExceptionModule,
  MapperModule
} from './components/modules/index.modules';

@Module({
  imports: [
    DatabaseModule,
    ComponentsModule,
    MapperModule,
    ExceptionModule
  ]
})
export class AppModule { }