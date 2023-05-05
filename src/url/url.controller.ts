import {
  Controller,
  Get,
  Query,
  Post,
  Req,
  Res,
  UseGuards,
  Body,
} from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { CreateUrlDto } from './url.dto';
import { UrlService } from './url.service';

@UseGuards(JwtAuthGuard)
@Controller('u')
export class UrlController {
  constructor(private readonly urlService: UrlService) {}

  @Post()
  create(@Req() req, @Body() createUrlDto: CreateUrlDto) {
    return this.urlService.create(createUrlDto, req.user.id);
  }

  @Get('all')
  all(@Req() req) {
    return this.urlService.findAll(req.user);
  }

  @Get()
  async show(@Res() res, @Query('n') shortName) {
    const url = await this.urlService.findOne(shortName);
    return res.status(302).redirect(url.originalUrl);
  }
}
