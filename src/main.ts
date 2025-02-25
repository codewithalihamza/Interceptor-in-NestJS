import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { TransformInterceptor } from './interceptor/transform-interceptor';
// import { LoggingInterceptor } from './interceptor/logging-interceptor';

async function bootstrap() {
  const port: number = 5000;

  const app = await NestFactory.create(AppModule);
  // app.useGlobalInterceptors(new LoggingInterceptor());  // Global-Level Interceptor

  //✅ This will wrap every response in { success: true, data: ... } format.
  app.useGlobalInterceptors(new TransformInterceptor()); // Global-Level Interceptor

  await app.listen(port, () => console.log(`Nest server ready at ${port}`));
}
bootstrap();
