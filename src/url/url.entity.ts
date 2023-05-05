import { User } from '../user/user.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';

@Entity()
export class Url {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  shortName: string;

  @Column()
  originalUrl: string;

  @ManyToOne(() => User, (user) => user.url)
  user: User;
}
