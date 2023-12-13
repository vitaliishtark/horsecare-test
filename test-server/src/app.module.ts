import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { APP_GUARD } from '@nestjs/core';
import { ConfigModule } from '@nestjs/config';

import { AppController } from './app.controller';
import { SupabaseModule } from './modules/supabase/supabase.module';
import { SupabaseGuard } from './modules/supabase/supabase.guard';
import { UserModule } from './modules/user/user/user.module';
import { StripeModule } from './stripe/stripe.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    PassportModule,
    SupabaseModule,
    UserModule,
    StripeModule,
  ],
  controllers: [AppController],
  providers: [
    {
      provide: APP_GUARD,
      useClass: SupabaseGuard,
    },
  ],
})
export class AppModule {}
