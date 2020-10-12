import {
  Entity,
  ObjectID,
  ObjectIdColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import IEquipament from '../../../models/IEquipament';

@Entity('equipaments')
class Equipament implements IEquipament {
  @ObjectIdColumn() id: ObjectID;

  @Column() description: string;

  @Column() bpm: string;

  @CreateDateColumn() created_at: Date;

  @UpdateDateColumn() updated_at: Date;
}

export default Equipament;
