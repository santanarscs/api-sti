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
class Movimentation implements IMovimentation {
  @PrimaryGeneratedColumn('uuid') id: string;

  @Column() date: Date;

  @Column() user_id: string;

  @ManyToOne(() => User, { eager: true })
  @JoinColumn({ name: 'user_id' })
  user: User;

  @Column() equipament_id: string;

  @Column() section_id: string;

  @ManyToOne(() => Section, { eager: true })
  @JoinColumn({ name: 'section_id' })
  section: Section;

  @CreateDateColumn() created_at: Date;

  @UpdateDateColumn() updated_at: Date;
}

export default Movimentation;
