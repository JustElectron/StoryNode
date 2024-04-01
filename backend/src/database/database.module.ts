import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { DbConfigService } from './db-config.service'; // Example service for database configuration

@Module({
  imports: [
    ConfigModule.forRoot(), // If you are using environment variables for configuration
    TypeOrmModule.forRootAsync({
      useClass: DbConfigService, // Use a service to dynamically provide TypeORM configuration
    }),
  ],
  exports: [TypeOrmModule],
})
export class DatabaseModule {}