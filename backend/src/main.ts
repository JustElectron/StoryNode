import { NestFactory } from '@nestjs/core';
import { SwaggerModule} from '@nestjs/swagger';
import { readFileSync } from 'fs';
import { join } from 'path';
import { parse } from 'yaml';
import { AppModule } from './app.module';
import "reflect-metadata"

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const file = readFileSync(join(process.cwd(), 'openapi.yaml')).toString('utf-8');
  const document = parse(file);

  SwaggerModule.setup('api', app, document);

  await app.listen(3000);
}
bootstrap();
