import { Module } from '@nestjs/common';

import { UserController } from './user.controller';
import { UserService } from './user.service';
import { SupabaseModule } from 'src/modules/supabase/supabase.module';

@Module({
  controllers: [UserController],
  imports: [SupabaseModule],
  providers: [UserService],
})
export class UserModule {}
