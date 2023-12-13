import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpException,
  HttpStatus,
  Post,
} from '@nestjs/common';

import { UserService } from './user.service';
import { CreateUserDto } from './dto';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @HttpCode(HttpStatus.CREATED)
  @Post()
  public async createOne(@Body() body: CreateUserDto) {
    try {
      return this.userService.createOne(body);
    } catch (e) {
      throw new HttpException(
        e.message,
        e.status || HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  @HttpCode(HttpStatus.OK)
  @Get()
  public async getAll() {
    try {
      return this.userService.getAll();
    } catch (e) {
      throw new HttpException(
        e.message,
        e.status || HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
