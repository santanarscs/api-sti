import {
  Entity,
  ObjectID,
  ObjectIdColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import ISection from '../../../models/ISection';

@Entity('sections')
class Section implements ISection {
  @ObjectIdColumn() id: ObjectID;

  @Column() name: string;

  @Column() description: string;

  @CreateDateColumn() created_at: Date;

  @UpdateDateColumn() updated_at: Date;
}

export default Section;
