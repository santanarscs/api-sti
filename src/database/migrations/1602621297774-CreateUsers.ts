import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export default class CreateUsers1602621297774 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'users',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
            generationStrategy: 'uuid',
            default: 'uuid_generate_v4()',
          },
          {
            name: 'name',
            type: 'varchar',
            isUnique: true,
          },
          {
            name: 'email',
            type: 'varchar',
            isUnique: true,
          },
          {
            name: 'password',
            type: 'varchar',
          },
          {
            name: 'avatar',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'saram',
            type: 'varchar',
          },
          {
            name: 'full_name',
            type: 'varchar',
          },
          {
            name: 'situation',
            type: 'varchar',
          },
          {
            name: 'phone',
            type: 'varchar',
          },
          {
            name: 'birthday',
            type: 'timestamp',
          },
          {
            name: 'last_promotion',
            type: 'timestamp',
          },
          {
            name: 'provider',
            type: 'boolean',
          },
          {
            name: 'section_id',
            type: 'uuid',
          },
          {
            name: 'graduation_id',
            type: 'uuid',
          },
          {
            name: 'board_id',
            type: 'uuid',
          },
          {
            name: 'specialty_id',
            type: 'uuid',
          },
          {
            name: 'sequence',
            type: 'int',
          },
          {
            name: 'created_at',
            type: 'timestamp',
            default: 'now()',
          },
          {
            name: 'updated_at',
            type: 'timestamp',
            default: 'now()',
          },
        ],
        foreignKeys: [
          {
            name: 'SectionUser',
            referencedTableName: 'sections',
            referencedColumnNames: ['id'],
            columnNames: ['section_id'],
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE',
          },
          {
            name: 'GraduationUser',
            referencedTableName: 'graduations',
            referencedColumnNames: ['id'],
            columnNames: ['graduation_id'],
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE',
          },
          {
            name: 'BoardUser',
            referencedTableName: 'boards',
            referencedColumnNames: ['id'],
            columnNames: ['board_id'],
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE',
          },
          {
            name: 'SpecialtiesUser',
            referencedTableName: 'specialties',
            referencedColumnNames: ['id'],
            columnNames: ['specialty_id'],
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('users');
  }
}
