import {
  Entity,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  PrimaryGeneratedColumn,
} from 'typeorm';
import IEquipament from '../../../models/IEquipament';

@Entity('equipaments')
class Equipament implements IEquipament {
  @PrimaryGeneratedColumn('uuid') id: string;

  @Column() description: string;

  @Column() bpm: string;

  @Column() service_tag: string;

  @CreateDateColumn() created_at: Date;

  @UpdateDateColumn() updated_at: Date;
}

export default Equipament;
