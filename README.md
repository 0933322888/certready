# CertReady

Exam preparation platform for Skilled Trades Ontario certification candidates.

## Stack
- **Frontend:** React 18 + Vite + Tailwind CSS → deployed on Vercel
- **Backend:** Node.js + Express + MongoDB → deployed on Railway/Render
- **Payments:** Stripe Checkout

## Local Development

1. Clone the repo
2. Copy `.env.example` to `.env` in both `server/` and `client/`
3. Fill in your MongoDB URI, JWT secret, and Stripe keys
4. Run `npm run install:all` from root
5. Run `npm run dev` from root (starts both server on :5000 and client on :5173)

## Stripe Setup
1. Create a Stripe account at stripe.com
2. Get your test API keys from the Dashboard
3. For webhooks locally: install Stripe CLI, run `stripe listen --forward-to localhost:5000/api/payments/webhook`
4. Copy the webhook signing secret to your `.env`

## Deployment
- Frontend: Connect `/client` to Vercel, set env vars
- Backend: Deploy `/server` to Railway or Render, set env vars
- Update `CLIENT_URL` in server env to your Vercel URL
- Register Stripe webhook endpoint in Stripe Dashboard
