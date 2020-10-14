import {
  Entity,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import Specialty from './Specialty';
import Section from '../../../../sections/infra/typeorm/entities/Section';
import Graduation from './Graduation';
import Board from './Board';
import IUser from '../../../models/IUser';

@Entity('users')
class User implements IUser {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column() name: string;

  @Column() email: string;

  @Column() password: string;

  @Column()
  specialty_id: string;

  @ManyToOne(() => Specialty)
  @JoinColumn({ name: 'specialty_id' })
  specialty: Specialty;

  @Column()
  board_id: string;

  @ManyToOne(() => Board)
  @JoinColumn({ name: 'board_id' })
  board: Board;

  @Column()
  graduation_id: string;

  @ManyToOne(() => Graduation)
  @JoinColumn({ name: 'graduation_id' })
  graduation: Graduation;

  @Column()
  section_id: string;

  @ManyToOne(() => Section)
  @JoinColumn({ name: 'section_id' })
  section: Section;

  @Column() avatar: string;

  @Column() saram: string;

  @Column() full_name: string;

  @Column() situation: string;

  @Column() phone: string;

  @Column({ type: 'date' }) birthday: Date;

  @Column({ type: 'date' }) last_promotion: Date;

  @Column() sequence: string;

  @Column({ type: 'boolean' }) provider: boolean;

  @CreateDateColumn() created_at: Date;

  @UpdateDateColumn() updated_at: Date;
}

export default User;
