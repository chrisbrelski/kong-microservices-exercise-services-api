import {
    Controller,
    Get,
    Post,
    Body,
    Param,
    ParseIntPipe,
    Logger,
    Query
  } from '@nestjs/common';
  import { ServiceApiService } from './service-api.service';
  import { CreateServiceApiDto } from './dto/create-service-api.dto';

  @Controller('services')
  export class ServiceApiController {
    constructor(private readonly serviceApiService: ServiceApiService) {}

    @Post()
    create(@Body() createDto: CreateServiceApiDto) {
      return this.serviceApiService.create(createDto);
    }

    @Get()
    findAll(
      @Query('page') page?: string,
      @Query('pageSize') pageSize?: string,
      @Query('sort') sort?: string,
    ) {
      if (!page && !pageSize && !sort) {
        return this.serviceApiService.findAll();
      }
      else if (sort) {
        return this.serviceApiService.findAllSorted(sort);
      }
      else {
        return this.serviceApiService.findAllPaginated(Number(page), Number(pageSize));
      }
      //TODO: combine handling all parameters for maximum flexibility.
    }

    @Get(':id')
    findOne(@Param('id', ParseIntPipe) id: number) {
      return this.serviceApiService.findOne(id);
    }

    @Get(':id/versions')
    findOneWithVersionData(@Param('id', ParseIntPipe) id: number) {
      return this.serviceApiService.findOneWithVersions(id);
    }
  }
