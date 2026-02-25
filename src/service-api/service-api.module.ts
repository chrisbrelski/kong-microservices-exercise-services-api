import { Module } from '@nestjs/common';
import { ServiceApiService } from './service-api.service';
import { ServiceApiController } from './service-api.controller';
import { ServiceApi } from './service-api.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { VersionData } from '../version-data/version-data.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ServiceApi, VersionData])],
  controllers: [ServiceApiController],
  providers: [ServiceApiService],
  exports: [ServiceApiService],
})

export class ServiceApiModule {}
