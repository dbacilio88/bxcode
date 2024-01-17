import { Module } from '@nestjs/common';
import { ComponentsModule } from './components/modules/components.module';
import { DatabaseModule } from './configurations/database.module';
import { MapperModule } from './configurations/mapper.module';

@Module({
  imports: [
    DatabaseModule,
    ComponentsModule,
    MapperModule
  ]
})
export class AppModule { }
