import { MigrationInterface, QueryRunner } from "typeorm"

export class AddProductCustomAttribute1729081809908 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
          "ALTER TABLE \"product\"" + 
          " ADD COLUMN \"customAttribute\" text"
        )
      }
    
      public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
          "ALTER TABLE \"product\" DROP COLUMN \"customAttribute\""
        )
      }

}
