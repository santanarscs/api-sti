import {
  Entity,
  ObjectID,
  ObjectIdColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import IUser from '../../../models/IUser';
import Specialty from './Specialty';
import Section from '../../../../sections/infra/typeorm/schemas/Section';
import Graduation from './Graduation';
import Board from './Board';

@Entity('users')
class User implements IUser {
  @ObjectIdColumn() id: ObjectID;

  @Column() name: string;

  @Column() email: string;

  @Column() password: string;

  @Column(() => Specialty) specialty: Specialty;

  @Column(() => Board) board: Board;

  @Column(() => Graduation) graduation: Graduation;

  @Column(() => Section) section: Section;

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
