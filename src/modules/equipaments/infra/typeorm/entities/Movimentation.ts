import {
  Entity,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import IMovimentation from '../../../models/IMovimentation';
import User from '../../../../users/infra/typeorm/entities/User';
import Section from '../../../../sections/infra/typeorm/entities/Section';

@Entity('movimentations_equipamet')
class Equipament implements IMovimentation {
  @PrimaryGeneratedColumn('uuid') id: string;

  @Column() date: Date;

  @Column() user_id: string;

  @ManyToOne(() => User, { eager: true })
  @JoinColumn({ name: 'user_id' })
  user: User;

  @Column() equipament_id: string;

  @ManyToOne(() => Equipament, { eager: true })
  @JoinColumn({ name: 'equipament_id' })
  equipament: Equipament;

  @Column() section_id: string;

  @ManyToOne(() => Section, { eager: true })
  @JoinColumn({ name: 'section_id' })
  section: Section;

  @CreateDateColumn() created_at: Date;

  @UpdateDateColumn() updated_at: Date;
}

export default Equipament;
