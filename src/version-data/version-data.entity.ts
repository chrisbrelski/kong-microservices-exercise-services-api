import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    ManyToOne,
    JoinColumn,
  } from 'typeorm';
  import { ServiceApi } from '../service-api/service-api.entity';

  @Entity({ name: 'version_data' })
  export class VersionData {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    version: string;

    @Column({ type: 'text', nullable: true })
    description: string;

    @ManyToOne(
      () => ServiceApi,
      (service) => service.versions,
    )

    @JoinColumn({ name: 'service_id' })
    service: ServiceApi;
  }
