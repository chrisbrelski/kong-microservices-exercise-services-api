import { AppController } from './app.controller';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppService } from './app.service';
import { ServiceApiModule } from './service-api/service-api.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
      ConfigModule.forRoot(),
      ServiceApiModule,
      TypeOrmModule.forRoot({
        type: 'postgres',
        host: 'localhost',
        port: 5432,
        username: process.env.POSTGRES_USER,
        password: process.env.POSTGRES_PASSWORD,
        database: process.env.POSTGRES_DB_NAME,
        autoLoadEntities: true,
        synchronize: true // dev, for demo; TODO: for production, remove this and use migrations only
      }),
  ],
  controllers: [AppController],
  providers: [
    AppService,
  ],
})

export class AppModule {}
