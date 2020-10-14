import {
  Entity,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  PrimaryGeneratedColumn,
} from 'typeorm';
import IGraduation from '../../../models/IGraduation';

@Entity('graduations')
class Graduation implements IGraduation {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column() name: string;

  @Column() description: string;

  @CreateDateColumn() created_at: Date;

  @UpdateDateColumn() updated_at: Date;
}

export default Graduation;
