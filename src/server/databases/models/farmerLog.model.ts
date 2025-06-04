import {
  Table,
  Model,
  PrimaryKey,
  DataType,
  Column,
  Unique,
  Default,
  AllowNull,
  ForeignKey,
  BelongsTo,
} from 'sequelize-typescript';
import { tables } from '../tables';
import type {
  InferAttributes,
  InferCreationAttributes,
  CreationOptional,
  NonAttribute,
} from 'sequelize';
import { Sequelize } from 'sequelize';
import { Farmer } from './farmer.model';

@Table({
  tableName: tables.farmerLogs,
  timestamps: true,
  createdAt: 'created_at',
  updatedAt: 'updated_at',
})
export class FarmerLog extends Model<
  InferAttributes<FarmerLog>,
  InferCreationAttributes<FarmerLog>
> {
  @Default(Sequelize.literal('uuid_generate_v4()'))
  @Unique
  @PrimaryKey
  @AllowNull(false)
  @Column(DataType.UUID)
  declare log_id?: CreationOptional<string>;

  @ForeignKey(() => Farmer)
  @AllowNull(false)
  @Column(DataType.UUID)
  declare farmer_id: string;

  @AllowNull(false)
  @Column(DataType.DOUBLE)
  declare quantity: number;

  @Default('kg')
  @AllowNull(false)
  @Column(DataType.STRING)
  declare unit: CreationOptional<string>;

  @Column(DataType.DATE)
  declare harvest_date: CreationOptional<string>;

  @Column(DataType.DATE)
  declare created_at: CreationOptional<string>;

  @Column(DataType.DATE)
  declare updated_at: CreationOptional<string>;

  @BelongsTo(() => Farmer)
  declare farmer: NonAttribute<Farmer>;
}
