import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import Stripe from 'stripe';

@Injectable()
export class StripeService {
  private readonly stripe: Stripe;

  constructor(private readonly configService: ConfigService) {
    const stripeSecretKey = configService.get<string>('STRIPE_SECRET_KEY');

    if (!stripeSecretKey) {
      throw new Error('Stripe secret key is missing.');
    }

    this.stripe = new Stripe(stripeSecretKey, {
      apiVersion: '2023-10-16',
    });
  }

  async createCheckoutSession(
    amount: number,
  ): Promise<Stripe.Checkout.Session> {
    const session = await this.stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: 'usd',
            product_data: {
              name: 'Service',
            },
            unit_amount: amount * 100,
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: 'https://localhost:3001',
      cancel_url: 'https://localhost:3001',
    });

    return session;
  }
}
