# Vercel Deployment Guide

## Architecture Overview

CertReady uses a **split deployment**:
- **Frontend (React)**: Deployed to Vercel
- **Backend (Express)**: Deployed to Railway or Render (NOT Vercel)

**Why not Vercel for backend?**
- Vercel is optimized for serverless functions, not long-running Express servers
- Railway/Render are better suited for Express.js applications
- Stripe webhooks need a persistent endpoint, which works better on Railway/Render

## Deployment Steps

### 1. Deploy Backend First (Railway or Render)

See `DEPLOYMENT.md` for detailed backend deployment instructions.

**Important**: Note your backend URL (e.g., `https://certready-backend.railway.app`)

### 2. Set Up Stripe Webhook

1. Go to Stripe Dashboard → Developers → Webhooks
2. Add endpoint: `https://your-backend-url.railway.app/api/payments/webhook`
3. Select event: `checkout.session.completed`
4. Copy the webhook secret and add to backend environment variables

### 3. Deploy Frontend to Vercel

#### Option A: Vercel CLI

```bash
cd client
npm install -g vercel
vercel
```

Follow the prompts:
- Set root directory: `client/`
- Framework: Vite
- Build command: `npm run build`
- Output directory: `dist`

#### Option B: Vercel Dashboard

1. Go to [vercel.com](https://vercel.com) and sign in
2. Click **"Add New Project"**
3. Import your GitHub repository
4. Configure:
   - **Root Directory**: `client`
   - **Framework Preset**: Vite
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
5. Add environment variables:
   - `VITE_API_URL` = `https://your-backend-url.railway.app/api`
   - `VITE_STRIPE_PUBLISHABLE_KEY` = `pk_live_xxxxxxxxxxxx` (your production key)
6. Click **"Deploy"**

### 4. Update Backend CORS

After deploying frontend, update your backend `CLIENT_URL` environment variable:
- Set `CLIENT_URL` to your Vercel URL: `https://your-app.vercel.app`

### 5. Test Everything

1. Visit your Vercel URL
2. Register a test account
3. Try purchasing with test card: `4242 4242 4242 4242`
4. Verify webhook fires in Stripe Dashboard
5. Confirm user gets access to full course

## Environment Variables Summary

### Backend (Railway/Render)
```
MONGO_URI=mongodb+srv://...
JWT_SECRET=...
STRIPE_SECRET_KEY=sk_live_...
STRIPE_WEBHOOK_SECRET=whsec_...
CLIENT_URL=https://your-app.vercel.app
NODE_ENV=production
```

### Frontend (Vercel)
```
VITE_API_URL=https://your-backend.railway.app/api
VITE_STRIPE_PUBLISHABLE_KEY=pk_live_...
```

## Troubleshooting

### Webhooks Not Working?

1. **Check webhook URL**: Must be `https://` (not `http://`)
2. **Check webhook secret**: Must match what Stripe Dashboard shows
3. **Check backend logs**: Look for webhook events
4. **Test webhook**: Use Stripe Dashboard → Webhooks → Send test webhook

### CORS Errors?

- Make sure `CLIENT_URL` in backend matches your Vercel URL exactly
- Include protocol: `https://your-app.vercel.app` (not just `your-app.vercel.app`)

### API Calls Failing?

- Verify `VITE_API_URL` is set correctly in Vercel
- Check that backend is running and accessible
- Test backend health endpoint: `https://your-backend.railway.app/api/health`

## Production Checklist

- [ ] Backend deployed to Railway/Render
- [ ] Frontend deployed to Vercel
- [ ] All environment variables set
- [ ] Stripe webhook configured
- [ ] Database seeded
- [ ] Test purchase completed successfully
- [ ] Webhook events visible in Stripe Dashboard
- [ ] User access working correctly
