import {
  Entity,
  ObjectID,
  ObjectIdColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import ISpecialty from '../../../models/ISpecialty';

@Entity('specialties')
class Specialty implements ISpecialty {
  @ObjectIdColumn() id: ObjectID;

  @Column() name: string;

  @Column() description: string;

  @CreateDateColumn() created_at: Date;

  @UpdateDateColumn() updated_at: Date;
}

export default Specialty;
