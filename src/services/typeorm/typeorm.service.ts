import { Injectable } from '@nestjs/common';
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from '@nestjs/typeorm';

@Injectable()
export class TypeormService implements TypeOrmOptionsFactory {
  createTypeOrmOptions(): TypeOrmModuleOptions | Promise<TypeOrmModuleOptions> {
    return {
      type: 'mssql',
      host: 'database-1.cj0wsiscii40.sa-east-1.rds.amazonaws.com',
      port: 1433,
      username: 'admin',
      password: 'Tlpecqmfd.05',
      database: 'valledupar-sites-nestjs',
      extra: {
        trustServerCertificate: true,
      },
      entities: ['dist/**/*.model{.ts,.js}'],
    };
  }
}
