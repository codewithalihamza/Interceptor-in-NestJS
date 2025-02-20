import { Controller, Get, UseInterceptors } from '@nestjs/common';
import { LoggingInterceptor } from 'src/interceptor/logging-interceptor';

// @UseInterceptors(LoggingInterceptor)   Controller-Level Interceptor
@Controller('users')
export class UserController {
  @Get()
  @UseInterceptors(LoggingInterceptor)
  getUsers() {
    return [{ id: 1, name: 'Ali Hamza' }];
  }
}