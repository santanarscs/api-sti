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

@Entity('users')
class User implements IUser {
  @ObjectIdColumn() id: ObjectID;

  @Column() name: string;

  @Column() email: string;

  @Column() password: string;

  @Column(() => Specialty) specialty: Specialty;

  @CreateDateColumn() created_at: Date;

  @UpdateDateColumn() updated_at: Date;
}

export default User;
