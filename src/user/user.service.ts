import { Inject, Injectable } from '@nestjs/common';
import { entityRepository, saltRounds } from '../constant';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { User } from './user.entity';
import { CreateUserDto } from './user.dto';

@Injectable()
export class UserService {
  constructor(
    @Inject(entityRepository.user)
    private userRepository: Repository<User>,
  ) {}

  async createUser(body: CreateUserDto) {
    const hash = await bcrypt.hash(body.password, saltRounds);
    const user = this.userRepository.create({
      email: body.email,
      username: body.username,
      passwordHash: hash,
    });

    await this.userRepository.save(user);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { passwordHash, ...result } = user;
    return result;
  }

  async findAll(): Promise<User[]> {
    return this.userRepository.find();
  }

  async findOne(email: string): Promise<User> {
    return this.userRepository.findOne({
      where: { email },
    });
  }

  async findFirst(): Promise<User> {
    return this.userRepository.findOne({});
  }
}
