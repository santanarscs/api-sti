import {
  Entity,
  UpdateDateColumn,
  CreateDateColumn,
  Column,
  PrimaryGeneratedColumn,
} from 'typeorm';
import ISection from '../../../models/ISection';

@Entity('sections')
class Section implements ISection {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  description: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default Section;
