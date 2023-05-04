import { Controller, Get, Query, Post, Req, Res } from '@nestjs/common';
import { UrlService } from './url.service';

@Controller('url')
export class UrlController {
  constructor(private readonly urlService: UrlService) {}

  @Post()
  create(@Req() req) {
    return this.urlService.create(req);
  }

  @Get('all')
  all(@Req() req) {
    return this.urlService.findAll(req.user);
  }

  @Get('show')
  async show(@Res() res, @Query('shortName') shortName) {
    const url = await this.urlService.findOne(shortName);
    return res.status(302).redirect(url.originalUrl);
  }
}
