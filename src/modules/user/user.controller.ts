import { Controller, Get } from '@nestjs/common';

// @UseInterceptors(LoggingInterceptor)   Controller-Level Interceptor
@Controller('users')
export class UserController {
  @Get()
  // @UseInterceptors(LoggingInterceptor)  Method Level
  getUsers() {
    return [{ id: 1, name: 'Ali Hamza' }];
  }
}
