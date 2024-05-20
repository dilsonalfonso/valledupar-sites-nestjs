import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeormService } from './services/typeorm/typeorm.service';
import { Site } from './models/site.model';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({ useClass: TypeormService }),
    TypeOrmModule.forFeature([Site]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
