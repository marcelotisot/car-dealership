import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';

import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // Solo deja enviar la data que se esta esperando
      forbidNonWhitelisted: true, // Validar que solo lleguen las propiedades esperadas
    })
  )

  await app.listen(3000);
}
bootstrap();
