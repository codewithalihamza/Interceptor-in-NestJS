import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { LoggingInterceptor } from './interceptor/logging-interceptor';

async function bootstrap() {
  const port: number = 5000;

  const app = await NestFactory.create(AppModule);
  app.useGlobalInterceptors(new LoggingInterceptor());
  await app.listen(port, () => console.log(`Nest server ready at ${port}`));

}
bootstrap();
