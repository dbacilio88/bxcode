import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

export const DatabaseProvider = [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({

        ssl: process.env.STAGE === 'prod',
        extra: {
            ssl: process.env.STAGE === 'prod'
                ? { rejectUnauthorized: false }
                : null,
        },
        type: 'postgres',
        host: process.env.DB_HOST,
        database: process.env.DB_NAME,
        schema: process.env.DB_SCHEMA,
        username: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        port: +process.env.DB_PORT,
        synchronize: true,
        autoLoadEntities: true,
        entities: [__dirname + '../repository/entities/*.entity{.ts,.js}'],
        //migrations: [__dirname + '../migrations/*{.ts,.js}'],
        //logging: true
    }),
];