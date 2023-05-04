import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { User } from './user.entity';

@Injectable()
export class UserService {
  constructor(
    @Inject('USER_REPOSITORY')
    private userRepository: Repository<User>,
  ) {}

  async createUser(body: User) {
    const user = await this.userRepository.create(body);
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
