import {
  Entity,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  PrimaryGeneratedColumn,
} from 'typeorm';
import IBoard from '../../../models/IBoard';

@Entity('boards')
class Board implements IBoard {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column() name: string;

  @Column() description: string;

  @CreateDateColumn() created_at: Date;

  @UpdateDateColumn() updated_at: Date;
}

export default Board;
