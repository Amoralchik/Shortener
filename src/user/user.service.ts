import { Inject, Injectable } from '@nestjs/common';
import { entityRepository, saltRounds } from '../constant';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { User } from './user.entity';

@Injectable()
export class UserService {
  constructor(
    @Inject(entityRepository.user)
    private userRepository: Repository<User>,
  ) {}

  async createUser(body: User) {
    const salt = bcrypt.genSaltSync(saltRounds);
    const hash = bcrypt.hashSync(body.passwordHash, salt);

    const user = this.userRepository.create({
      ...body,
      passwordHash: hash,
    });
    await this.userRepository.save(user);
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
