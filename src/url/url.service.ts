import { Inject, Injectable } from '@nestjs/common';
import { nanoid } from 'nanoid';
import { entityRepository, hostUrl } from '../constant';
import { User } from '../user/user.entity';
import { Repository } from 'typeorm';
import { Url } from './url.entity';
import { CreateUrlDto } from './url.dto';

@Injectable()
export class UrlService {
  constructor(
    @Inject(entityRepository.url)
    private urlRepository: Repository<Url>,
  ) {}

  async create(body: CreateUrlDto, userId): Promise<string> {
    const urlToCreate = {
      ...body,
      shortName: nanoid(10),
      user: userId,
    };
    const url = this.urlRepository.create(urlToCreate);
    await this.urlRepository.save(url);
    return `${hostUrl}u?n=${url.shortName}`;
  }

  async findAll(user: User) {
    return this.urlRepository.find({
      where: { user },
    });
  }

  async findOne(shortName: string) {
    return this.urlRepository.findOne({
      where: { shortName },
    });
  }
}
