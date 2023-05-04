import { Body, Controller, Get, Post } from '@nestjs/common';
import { User } from './user.entity';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  createUser(@Body() body: User) {
    return this.userService.createUser(body);
  }

  @Get('all')
  all() {
    return this.userService.findAll();
  }
}
