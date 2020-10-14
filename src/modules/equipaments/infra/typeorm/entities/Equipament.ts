import {
  Entity,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  PrimaryGeneratedColumn,
  OneToMany,
} from 'typeorm';
import IEquipament from '../../../models/IEquipament';
import Movimentation from './Movimentation';

@Entity('equipaments')
class Equipament implements IEquipament {
  @PrimaryGeneratedColumn('uuid') id: string;

  @Column() description: string;

  @Column() bpm: string;

  @Column() service_tag: string;

  @OneToMany(() => Movimentation, movimentation => movimentation.equipament, {
    cascade: true,
    eager: true,
  })
  movimentations: Movimentation[];

  @CreateDateColumn() created_at: Date;

  @UpdateDateColumn() updated_at: Date;
}

export default Equipament;
