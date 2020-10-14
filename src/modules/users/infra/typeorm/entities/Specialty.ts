import {
  Entity,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  PrimaryGeneratedColumn,
} from 'typeorm';
import ISpecialty from '../../../models/ISpecialty';

@Entity('specialties')
class Specialty implements ISpecialty {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column() name: string;

  @Column() description: string;

  @CreateDateColumn() created_at: Date;

  @UpdateDateColumn() updated_at: Date;
}

export default Specialty;
