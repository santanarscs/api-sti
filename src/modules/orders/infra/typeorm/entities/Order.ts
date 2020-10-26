import {
  Entity,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import IOrder from '../../../models/IOrder';
import User from '../../../../users/infra/typeorm/entities/User';

@Entity('orders')
class Order implements IOrder {
  @PrimaryGeneratedColumn('uuid') id: string;

  @Column() description: string;

  @Column() user: string;

  @Column() type: string;

  @Column() status: string;

  @Column() solver_id: string;

  @ManyToOne(() => User, { eager: true })
  @JoinColumn({ name: 'solver_id' })
  solver: User;

  @Column() resolution: string;

  @Column({ type: 'date' }) resolution_date: Date;

  @CreateDateColumn() created_at: Date;

  @UpdateDateColumn() updated_at: Date;
}

export default Order;