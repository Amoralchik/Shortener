import { Module } from '@nestjs/common';
import { UrlService } from './url.service';
import { DatabaseModule } from 'src/database/database.module';
import { urlProviders } from './url.providers';

@Module({
  imports: [DatabaseModule],
  providers: [...urlProviders, UrlService],
  exports: [UrlService],
})
export class UrlModule {}
