import { Injectable } from '@nestjs/common';
import { TypeOrmOptionsFactory } from '@nestjs/typeorm';
import { Entity } from 'typeorm';

@Injectable()
export class TypeormService implements TypeOrmOptionsFactory {
  createTypeOrmOptions(): TypeOrmModuleOptions | Promise<TypeOrmModuleOptions> {
    return {
      type: 'mssql',
      host: 'valledupar-sites-nestjs.cj0wsiscii40.sa-east-1.rds.amazonaws.com',
      port: 1433,
      username: 'admin',
      password: 'Tlpecqmfv.05',
      database: 'valledupar-sites-nestjs',
      entities: ['dist/**/*.model{.ts,.js}'],
    };
  }
}
