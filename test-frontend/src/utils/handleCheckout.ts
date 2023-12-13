import { loadStripe } from "@stripe/stripe-js";
import api from "../api/api";

const stripePromise = loadStripe(
    process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY as string
  );
export const handleCheckout = async () => {
    try {
      const response = await api.get("stripe/create-checkout-session");

      const session = response.data;

      const stripe = await stripePromise;
      const result = await stripe?.redirectToCheckout({
        sessionId: session.sessionId,
      });

      if (result?.error) {
        console.error(result.error.message);
      }
    } catch (error) {
      console.error("An unexpected error occurred:", error);
    }
  };