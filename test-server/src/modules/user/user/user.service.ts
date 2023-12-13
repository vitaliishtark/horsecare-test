import { Injectable, InternalServerErrorException } from '@nestjs/common';

import { CreateUserDto } from './dto';
import { Supabase } from 'src/modules/supabase/supabase';

@Injectable()
export class UserService {
  constructor(private readonly supabase: Supabase) {}

  public async createOne(data: CreateUserDto) {
    try {
      const { data: newUser, error } = await this.supabase
        .getClient()
        .from('user')
        .insert(data)
        .select();

      if (error) {
        throw new InternalServerErrorException(
          `Error creating user: ${error.message}`,
        );
      }

      return newUser;
    } catch (error) {
      throw new InternalServerErrorException(
        `Failed to create user: ${error.message}`,
      );
    }
  }

  public async getAll() {
    try {
      const { data: users, error } = await this.supabase
        .getClient()
        .from('user')
        .select('*');

      if (error) {
        throw new InternalServerErrorException(
          `Supabase error: ${error.message}`,
        );
      }

      return users;
    } catch (error) {
      throw new InternalServerErrorException(
        `Failed to fetch users: ${error.message}`,
      );
    }
  }
}
