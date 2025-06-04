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
  tableName: tables.farmers,
  timestamps: true,
  createdAt: 'created_at',
  updatedAt: 'updated_at',
})
export class Farmer extends Model<
  InferAttributes<Farmer>,
  InferCreationAttributes<Farmer>
> {
  @Default(Sequelize.literal('uuid_generate_v4()'))
  @Unique
  @PrimaryKey
  @AllowNull(false)
  @Column(DataType.UUID)
  declare farmer_id?: CreationOptional<string>;

  @AllowNull(false)
  @Column(DataType.STRING)
  declare names: string;

  @Unique(true)
  @AllowNull(false)
  @Column(DataType.STRING)
  declare phone_number: CreationOptional<string>;

  @Column(DataType.DATE)
  declare created_at?: CreationOptional<string>;

  @Column(DataType.DATE)
  declare updated_at?: CreationOptional<string>;
}
