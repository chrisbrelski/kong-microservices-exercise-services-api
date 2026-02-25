import { MigrationInterface, QueryRunner } from "typeorm";

export class ServiceTableCreation1771446586047 implements MigrationInterface {
    name = 'ServiceTableCreation1771446586047'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "version_data" ("id" SERIAL NOT NULL, "version" character varying NOT NULL, "description" text, "service_id" integer NOT NULL, CONSTRAINT "PK_533942193d5784e76102fd355dc" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "service_apis" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "description" character varying NOT NULL, "baseuri" character varying NOT NULL, "isActive" boolean NOT NULL DEFAULT true, CONSTRAINT "PK_57f02ea99e29b68841ba34eee8b" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "version_data" ADD CONSTRAINT "FK_8b9dd6b8915af98ad6792d11e3f" FOREIGN KEY ("service_id") REFERENCES "service_apis"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "version_data" DROP CONSTRAINT "FK_8b9dd6b8915af98ad6792d11e3f"`);
        await queryRunner.query(`DROP TABLE "service_apis"`);
        await queryRunner.query(`DROP TABLE "version_data"`);
    }

}
