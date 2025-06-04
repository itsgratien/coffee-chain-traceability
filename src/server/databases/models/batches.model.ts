import {
  Table,
  Model,
  PrimaryKey,
  DataType,
  Column,
  Unique,
  Default,
  AllowNull,
} from 'sequelize-typescript';
import { tables } from '../tables';
import type {
  InferAttributes,
  InferCreationAttributes,
  CreationOptional,
} from 'sequelize';
import { Sequelize } from 'sequelize';

@Table({
  tableName: tables.batches,
  timestamps: true,
  createdAt: 'created_at',
  updatedAt: 'updated_at',
})
export class Batch extends Model<
  InferAttributes<Batch>,
  InferCreationAttributes<Batch>
> {
  @Default(Sequelize.literal('uuid_generate_v4()'))
  @Unique
  @PrimaryKey
  @AllowNull(false)
  @Column(DataType.UUID)
  declare batch_id?: CreationOptional<string>;

  @AllowNull(false)
  @Column(DataType.BIGINT)
  declare batch_number: number;

  @AllowNull(false)
  @Column(DataType.DOUBLE)
  declare quantity: number;

  @Default('kg')
  @AllowNull(false)
  @Column(DataType.STRING)
  declare unit: CreationOptional<string>;

  @AllowNull(false)
  @Column(DataType.STRING)
  declare status: string;

  @Column(DataType.STRING)
  declare qr_code?: CreationOptional<string>;

  @Column(DataType.DATE)
  declare processed_date?: CreationOptional<string>;

  @Column(DataType.DATE)
  declare created_at: CreationOptional<string>;

  @Column(DataType.DATE)
  declare updated_at: CreationOptional<string>;
}
