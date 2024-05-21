import {
  Body,
  Controller,
  Delete,
  Get,
  HttpException,
  HttpStatus,
  Param,
  Post,
} from '@nestjs/common';
import { Site } from 'src/models/site.model';
import { SiteService } from 'src/services/site/site.service';

@Controller('site')
export class SiteController {
  constructor(private siteService: SiteService) {}
  @Get()
  get() {
    //return `This action returns a Todos los Sitios`;
    return this.siteService
      .findAll()
      .then((res) => {
        return { success: true, data: res };
      })
      .catch((error) => {
        throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR);
      });
  }
  @Get(':id')
  getById(@Param('id') id: number) {
    //return `This action returns a #${id} cat`;
    return this.siteService
      .findById(id)
      .then((res) => {
        return { success: true, data: res };
      })
      .catch((error) => {
        throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR);
      });
  }
  @Post()
  save(@Body() site: Site) {
    return this.siteService
      .create(site)
      .then((res) => {
        return { success: true, data: res };
      })
      .catch((error) => {
        throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR);
      });
  }
  @Post('/update')
  update(@Body() site: Site) {
    return this.siteService
      .update(site)
      .then((res) => {
        return { success: true, data: res };
      })
      .catch((error) => {
        throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR);
      });
  }
  @Get('/delete/:id')
  delete(@Param('id') id: number) {
    return this.siteService
      .delete(id)
      .then((res) => {
        return { success: true, data: res };
      })
      .catch((error) => {
        throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR);
      });
  }
}
