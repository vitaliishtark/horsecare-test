import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const port = 3000;
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: '*',
  });

  app.useGlobalPipes(new ValidationPipe());

  await app.listen(port, () =>
    console.log(`Server has been started on ${port}`),
  );
}
bootstrap();
