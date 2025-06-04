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
  tableName: tables.stocks,
  timestamps: true,
  createdAt: 'created_at',
  updatedAt: 'updated_at',
})
export class Stock extends Model<
  InferAttributes<Stock>,
  InferCreationAttributes<Stock>
> {
  @Default(Sequelize.literal('uuid_generate_v4()'))
  @Unique
  @PrimaryKey
  @AllowNull(false)
  @Column(DataType.UUID)
  declare stock_id?: CreationOptional<string>;

  @AllowNull(false)
  @Column(DataType.DOUBLE)
  declare quantity: number;

  @Default('kg')
  @AllowNull(false)
  @Column(DataType.STRING)
  declare unit: CreationOptional<string>;

  @Column(DataType.DATE)
  declare created_at: CreationOptional<string>;

  @Column(DataType.DATE)
  declare updated_at: CreationOptional<string>;
}
