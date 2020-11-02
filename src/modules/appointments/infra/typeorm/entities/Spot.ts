import {
  Entity,
  UpdateDateColumn,
  CreateDateColumn,
  Column,
  PrimaryGeneratedColumn,
} from 'typeorm';
import ISpot from '../../../models/ISpot';

@Entity('spots')
class Section implements ISpot {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  places: number;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default Section;
