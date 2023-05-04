import { Inject, Injectable } from '@nestjs/common';
import { nanoid } from 'nanoid';
import { User } from 'src/user/user.entity';
import { Repository } from 'typeorm';
import { Url } from './url.entity';

@Injectable()
export class UrlService {
  constructor(
    @Inject('URL_REPOSITORY')
    private urlRepository: Repository<Url>,
  ) {}

  async create(req) {
    const urlToCreate = {
      ...req.body,
      shortName: nanoid(10),
      owner: 1,
      user: 1,
    };
    console.log(urlToCreate);

    const url = await this.urlRepository.create(urlToCreate);
    await this.urlRepository.save(url);
    return url;
  }

  async findAll(user: User) {
    return this.urlRepository.find({
      where: { user: { id: 1 } },
    });
  }

  async findOne(shortName: string) {
    return this.urlRepository.findOne({
      where: { shortName },
    });
  }
}
