import { Injectable } from '@nestjs/common';
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from '@nestjs/typeorm';
// import { ConfigService } from '@nestjs/config';

@Injectable()
export class DbConfigService implements TypeOrmOptionsFactory {
  // constructor(private readonly configService: ConfigService) {}

  createTypeOrmOptions(): TypeOrmModuleOptions {
    return {
      type: 'sqlite', // or any other database type
    //   host: this.configService.get('DB_HOST'),
    //   port: this.configService.get('DB_PORT'),
    //   username: this.configService.get('DB_USERNAME'),
    //   password: this.configService.get('DB_PASSWORD'),
    //   database: this.configService.get('DB_DATABASE'),
      database: process.cwd() + 'db.sqlite',
      autoLoadEntities: true,
      synchronize: true, // set to false in production
    };
  }
}