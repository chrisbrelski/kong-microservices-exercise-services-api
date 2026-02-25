import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    OneToMany
  } from 'typeorm';
  import { VersionData } from '../version-data/version-data.entity';

  @Entity({ name: 'service_apis' })
  export class ServiceApi {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    description: string;

    @Column()
    baseUri: string;

    @Column({ default: true })
    isActive: boolean;

    @OneToMany(
        () => VersionData,
        (versionData) => versionData.service,
        {
          cascade: true,
        },
      )
      versions: VersionData[];
  }
