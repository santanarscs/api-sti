import {
  Entity,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  PrimaryGeneratedColumn,
} from 'typeorm';
import ITypeOrder from '../../../models/ITypeOrder';

@Entity('types_orders')
class TypeOrder implements ITypeOrder {
  @PrimaryGeneratedColumn('uuid') id: string;

  @Column() name: string;

  @Column() color: string;

  @CreateDateColumn() created_at: Date;

  @UpdateDateColumn() updated_at: Date;
}

export default TypeOrder;
