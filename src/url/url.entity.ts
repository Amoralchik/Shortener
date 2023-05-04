import { User } from 'src/user/user.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';

@Entity()
export class Url {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  shortName: string;

  @Column()
  originalUrl: string;

  @Column()
  owner: string;

  @ManyToOne(() => User, (user) => user.photos)
  user: User;
}
