# Deploying Backend to Vercel

Yes, you can deploy the Express backend to Vercel! Here's how:

## Setup for Vercel

The server is already configured to work with Vercel. The structure:
- `server/api/index.js` - Vercel serverless function entry point
- `server/vercel.json` - Vercel configuration
- `server/index.js` - Exports the Express app (works for both Vercel and traditional hosting)

## Deployment Steps

### Option 1: Vercel CLI

```bash
cd server
npm install -g vercel
vercel
```

Follow the prompts:
- Set root directory: `server/`
- Framework: Other
- Build command: (leave empty or `echo "No build needed"`)
- Output directory: (leave empty)

### Option 2: Vercel Dashboard

1. Go to [vercel.com](https://vercel.com) and sign in
2. Click **"Add New Project"**
3. Import your GitHub repository
4. Configure:
   - **Root Directory**: `server`
   - **Framework Preset**: Other
   - **Build Command**: (leave empty)
   - **Output Directory**: (leave empty)
5. Add environment variables (see below)
6. Click **"Deploy"**

## Environment Variables

Add these in Vercel Dashboard → Project → Settings → Environment Variables:

```
MONGO_URI=mongodb+srv://...
JWT_SECRET=...
STRIPE_SECRET_KEY=sk_live_...
STRIPE_WEBHOOK_SECRET=whsec_...
CLIENT_URL=https://your-frontend.vercel.app
NODE_ENV=production
```

## Stripe Webhook Setup

1. After deploying, note your backend URL: `https://your-backend.vercel.app`
2. Go to Stripe Dashboard → Developers → Webhooks
3. Add endpoint: `https://your-backend.vercel.app/api/payments/webhook`
4. Select event: `checkout.session.completed`
5. Copy the webhook secret and add to Vercel environment variables

## Important Notes

### Database Connection

MongoDB connections work fine with Vercel serverless functions. The connection will be reused across function invocations.

### Webhook Endpoint

The webhook endpoint (`/api/payments/webhook`) will work perfectly on Vercel. Make sure:
- The endpoint is publicly accessible
- `STRIPE_WEBHOOK_SECRET` is set correctly
- The webhook URL in Stripe Dashboard matches your Vercel URL

### Cold Starts

Vercel serverless functions may have cold starts (first request takes longer). This is normal and subsequent requests will be fast.

### Function Timeout

Vercel has a 10-second timeout on the Hobby plan, 60 seconds on Pro. Most API calls should complete well within this.

## Testing

1. Deploy backend to Vercel
2. Test health endpoint: `https://your-backend.vercel.app/api/health`
3. Test a purchase flow
4. Verify webhook events in Stripe Dashboard

## Deployment Checklist

- [ ] Backend deployed to Vercel
- [ ] All environment variables set
- [ ] Stripe webhook configured with Vercel URL
- [ ] `CLIENT_URL` set to frontend Vercel URL
- [ ] Database seeded (run seed script via Vercel CLI or function)
- [ ] Test purchase completed successfully
- [ ] Webhook events visible in Stripe Dashboard

## Seeding Database on Vercel

You can seed the database by:

1. **Using Vercel CLI**:
   ```bash
   vercel env pull .env.local
   cd server
   node seed.js
   ```

2. **Creating a one-time function**: Create `server/api/seed.js` that runs the seed script (remove after use)

3. **Using MongoDB Compass** or **mongo shell** to manually insert the course

## Both Frontend and Backend on Vercel

You can deploy both to Vercel:
- **Frontend**: Deploy `client/` directory
- **Backend**: Deploy `server/` directory (separate project)

Or use Vercel monorepo support to deploy both from the same repo.
