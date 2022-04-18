import { MigrationInterface, QueryRunner } from 'typeorm';

export class insertExampleProducts1650297855253 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(`INSERT INTO product ("name", "imageUrl", "price", "quantity")
    VALUES ('Product01', 'https://place-hold.it/500x500', 10, 15),
    ('Product02', 'https://place-hold.it/500x500', 23, 15),
    ('Product03', 'https://place-hold.it/500x500', 35, 15),
    ('Product04', 'https://place-hold.it/500x500', 32, 15),
    ('Product05', 'https://place-hold.it/500x500', 17, 15);
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query('DELETE FROM product;');
  }
}
