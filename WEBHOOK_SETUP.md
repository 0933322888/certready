# Stripe Webhook Setup Guide

## For Local Development

When testing purchases locally, you need to forward Stripe webhooks to your local server.

### Step 1: Install Stripe CLI

Download and install from: https://stripe.com/docs/stripe-cli

### Step 2: Login to Stripe CLI

```bash
stripe login
```

This will open your browser to authenticate.

### Step 3: Forward Webhooks to Local Server

In a **separate terminal window**, run:

```bash
stripe listen --forward-to localhost:5000/api/payments/webhook
```

You'll see output like:
```
> Ready! Your webhook signing secret is whsec_xxxxxxxxxxxx
```

### Step 4: Add Webhook Secret to .env

Copy the webhook signing secret and add it to your `server/.env`:

```env
STRIPE_WEBHOOK_SECRET=whsec_xxxxxxxxxxxx
```

### Step 5: Restart Your Server

Restart your server so it picks up the new webhook secret.

### Step 6: Test a Purchase

Now when you complete a purchase:
1. Stripe will send the webhook event
2. Your local server will receive it
3. The purchase will be marked as completed automatically

## Troubleshooting

### Webhook Not Firing?

1. **Check Stripe CLI is running**: Make sure `stripe listen` is running in a separate terminal
2. **Check webhook secret**: Verify `STRIPE_WEBHOOK_SECRET` in your `.env` matches what Stripe CLI shows
3. **Check server logs**: Look for webhook events in your server console
4. **Check Stripe Dashboard**: Go to Developers → Events to see if webhooks are being sent

### Purchase Still Pending?

The code now has a **fallback mechanism**:
- If the webhook hasn't fired within a few seconds
- The verify endpoint will check Stripe directly
- And complete the purchase automatically

So even without webhooks, purchases should complete (though webhooks are still recommended for production).

## For Production

1. Go to Stripe Dashboard → Developers → Webhooks
2. Click "Add endpoint"
3. Enter your production URL: `https://your-backend-url.com/api/payments/webhook`
4. Select event: `checkout.session.completed`
5. Copy the webhook signing secret to your production environment variables
