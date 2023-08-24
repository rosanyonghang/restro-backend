import {
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { User } from '../../user/entities/user.entity';

export abstract class CoreEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @CreateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  updatedAt: Date;

  @ManyToOne(() => User)
  @JoinColumn({ name: 'createdBy' })
  createdBy: User;

  @ManyToOne(() => User)
  @JoinColumn({ name: 'updatedBy' })
  updatedBy: User;
}
