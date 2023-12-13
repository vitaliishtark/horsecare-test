# Horsecare

A full-stack application using Nest.js, Supabase, and React.

## Getting Started

### Server (Nest.js)

1. Navigate to the `test-server` directory.

2. Make sure you have all the necessary access keys. Create an `.env` file based on the provided `.env.example` file and add the necessary keys

3. Install dependencies: `npm install`

4. Start the server `npm run start:dev`. The server will run on http://localhost:3000.

### Client (React)

1. Navigate to the `test-frontend` directory.

2. Make sure you have all the necessary access keys. Create an `.env` file based on the provided `.env.example` file and add the necessary keys

3. Install dependencies: `npm install`

4. Start the server `npm start`. The server will run on http://localhost:3001.

### Testing Stripe payment

Use the official stripe documentation to run a test payment. https://stripe.com/docs/testing#cards

### Additional Information

This project uses Nest.js for the server, Supabase for the database, and React for the frontend.

Ensure that you have the necessary keys and configurations for Supabase in both the server and client environments.
