import { Module } from '@nestjs/common';

import { StripeController } from './stripe.controller';
import { StripeService } from './stripe.service';
import { ConfigService } from '@nestjs/config';

@Module({
  controllers: [StripeController],
  providers: [StripeService, ConfigService],
})
export class StripeModule {}
