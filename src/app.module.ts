import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserController } from './user/user.controller';
import { UserService } from './user/user.service';
import { UserModule } from './user/user.module';
import { databaseProviders } from './database/database.providers';
import { userProviders } from './user/user.providers';
import { AuthModule } from './auth/auth.module';
import { AuthService } from './auth/auth.service';

@Module({
  imports: [UserModule, AuthModule],
  controllers: [AppController, UserController],
  providers: [
    AppService,
    UserService,
    AuthService,
    ...userProviders,
    ...databaseProviders,
  ],
})
export class AppModule {
  static hot: any;
}
