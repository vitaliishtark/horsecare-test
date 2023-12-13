import { Controller, Get } from '@nestjs/common';
import { StripeService } from './stripe.service';

@Controller('stripe')
export class StripeController {
  constructor(private readonly stripeService: StripeService) {}

  @Get('create-checkout-session')
  async createCheckoutSession() {
    const session = await this.stripeService.createCheckoutSession(100);
    return { sessionId: session.id };
  }
}
