import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableColumn,
  TableForeignKey,
} from 'typeorm';

export default class CreateTypesOrder1603915215579
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'types_orders',
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
          },
          {
            name: 'color',
            type: 'varchar',
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
      }),
    );
    await queryRunner.dropColumn('orders', 'type');
    await queryRunner.addColumn(
      'orders',
      new TableColumn({
        name: 'type_id',
        type: 'uuid',
      }),
    );
    await queryRunner.createForeignKey(
      'orders',
      new TableForeignKey({
        name: 'TypesOrder',
        columnNames: ['type_id'],
        referencedTableName: 'types_orders',
        referencedColumnNames: ['id'],
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('types_orders');
    await queryRunner.dropForeignKey('orders', 'TypesOrder');
    await queryRunner.dropColumn('orders', 'type_id');
    await queryRunner.addColumn(
      'orders',
      new TableColumn({
        name: 'type',
        type: 'varchar',
      }),
    );
  }
}
