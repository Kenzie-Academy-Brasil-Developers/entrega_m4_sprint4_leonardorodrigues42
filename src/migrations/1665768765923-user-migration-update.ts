import { MigrationInterface, QueryRunner } from "typeorm";

export class userMigrationUpdate1665768765923 implements MigrationInterface {
    name = 'userMigrationUpdate1665768765923'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" ADD "isActive" boolean NOT NULL DEFAULT true`);
        await queryRunner.query(`ALTER TABLE "user" ALTER COLUMN "createdAt" SET DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "user" ALTER COLUMN "updatedAt" SET DEFAULT now()`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" ALTER COLUMN "updatedAt" DROP DEFAULT`);
        await queryRunner.query(`ALTER TABLE "user" ALTER COLUMN "createdAt" DROP DEFAULT`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "isActive"`);
    }

}
