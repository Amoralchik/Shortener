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
import { UrlModule } from './url/url.module';
import { urlProviders } from './url/url.providers';
import { UrlController } from './url/url.controller';

@Module({
  imports: [UserModule, AuthModule, UrlModule],
  controllers: [AppController, UserController, UrlController],
  providers: [
    AppService,
    UserService,
    AuthService,
    ...userProviders,
    ...urlProviders,
    ...databaseProviders,
  ],
})
export class AppModule {
  static hot: any;
}
