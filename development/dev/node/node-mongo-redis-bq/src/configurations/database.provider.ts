import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';

export const DatabaseProvider = [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({

        ssl: process.env.STAGE === 'prod',
        extra: {
            ssl: process.env.STAGE === 'prod'
                ? { rejectUnauthorized: false }
                : null,
        },
        type: 'mongodb',

        url: process.env.DB_HOST,
        database: process.env.DB_NAME,
        username: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        autoLoadEntities: true,
        synchronize: true,
        logging: true,

        

        entities: [join(__dirname,'/../../api/documents/*.document{.ts,.js}')],
        //url: `mongodb+srv://${encodeURIComponent("bacsystem")}:${encodeURIComponent("C44910167d")}@cluster0.vbix1.mongodb.net/test?retryWrites=true&w=majority`,
        //url: 'mongodb+srv://cluster0-vbix1.mongodb.net',


        //useNewUrlParser: true,
        //useUnifiedTopology: true




        //schema: process.env.DB_SCHEMA,
        //
        //
        //port: +process.env.DB_PORT,
        //synchronize: true,
        //autoLoadEntities: true,
        //migrations: [__dirname + '../migrations/*{.ts,.js}'],
    }),
];


