import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ServiceApi } from './service-api.entity';
import { CreateServiceApiDto } from './dto/create-service-api.dto';

@Injectable()
export class ServiceApiService {
  constructor(
    @InjectRepository(ServiceApi)
    private readonly serviceApiRepository: Repository<ServiceApi>,
  ) {}

  async create(createDto: CreateServiceApiDto): Promise<ServiceApi> {
    const serviceApi = this.serviceApiRepository.create(createDto);
    return this.serviceApiRepository.save(serviceApi);
  }

  async findAll(): Promise<ServiceApi[]> {
    return this.serviceApiRepository.find();
  }

  async findAllPaginated(
    page = 1,
    pageSize = 10,
  ): Promise<{
    data: ServiceApi[];
    total: number;
  }> {
    const [data, total] = await this.serviceApiRepository.findAndCount({
      skip: (page - 1) * pageSize,
      take: pageSize,
    });
  
    return {
      data,
      total,
    };
  }

  async findAllSorted(sortOrder: string): Promise<ServiceApi[]> {
    const sortOrderFilter = sortOrder === 'desc' ? 'DESC' : 'ASC'

    return this.serviceApiRepository.find({
      order: {
        name: sortOrderFilter
      }
    });
  }

  async findOne(id: number): Promise<ServiceApi> {
    const serviceApi = await this.serviceApiRepository.findOne({
      where: { id },
    });

    if (!serviceApi) {
      throw new NotFoundException(`Service Api with id ${id} not found`);
    }

    return serviceApi;
  }

  async findOneWithVersions(id: number): Promise<ServiceApi | null> {
    // Return a join with the versions data for the service.
    return this.serviceApiRepository.findOne({
      where: { id },
      relations: ['versions'],
    });
  }
}
