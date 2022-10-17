import { MigrationInterface, QueryRunner } from "typeorm";

export class userMigrationUpdate1665705471667 implements MigrationInterface {
    name = 'userMigrationUpdate1665705471667'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" RENAME COLUMN "isAdmin" TO "isAdm"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" RENAME COLUMN "isAdm" TO "isAdmin"`);
    }

}
