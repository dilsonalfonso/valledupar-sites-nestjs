import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeormService } from './services/typeorm/typeorm.service';
import { Site } from './models/site.model';
import { SiteController } from './controllers/site/site.controller';
import { SiteService } from './services/site/site.service';

@Module({
  controllers: [AppController, SiteController],
  imports: [
    TypeOrmModule.forRootAsync({ useClass: TypeormService }),
    TypeOrmModule.forFeature([Site]),
  ],
  providers: [AppService, TypeormService, SiteService],
})
export class AppModule {}
