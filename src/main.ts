import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const port: number = 5000;

  const app = await NestFactory.create(AppModule);
  await app.listen(port, () => console.log(`Nest server ready at ${port}`));

}
bootstrap();
