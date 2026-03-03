# Deploy CertReady to Production (Vercel + certready.ca)

This guide walks you through deploying **CertReady** to production using **Vercel**, with your domain **certready.ca**. You will create **two Vercel projects**: one for the frontend (your main site) and one for the backend API.

---

## Prerequisites

- **GitHub**: Code in a GitHub repository (recommended for Vercel).
- **MongoDB Atlas**: A cluster and connection string ([mongodb.com/cloud/atlas](https://www.mongodb.com/cloud/atlas)).
- **Stripe**: Live API keys and a webhook endpoint (you’ll create this after the backend is deployed).
- **Domain**: certready.ca (and optionally www.certready.ca) pointed to Vercel (instructions below).

---

## Order of operations

1. Deploy the **backend** first (so you have an API URL).
2. Configure **Stripe** (webhook + live keys).
3. Deploy the **frontend** (pointing to the backend URL).
4. Add your **domain** (certready.ca) to the frontend project.
5. **Seed** the database and **test** the flow.

---

## Step 1 — Deploy the backend to Vercel

The backend runs as a **serverless API** on Vercel.

1. Go to [vercel.com](https://vercel.com) and sign in (GitHub is easiest).
2. Click **Add New…** → **Project** and import your repository.
3. Configure the project:
   - **Project Name**: e.g. `certready-api`
   - **Root Directory**: click **Edit**, set to **`server`** (not the repo root).
   - **Framework Preset**: Other (or leave as detected).
   - **Build Command**: leave empty or `npm install`.
   - **Output Directory**: leave empty (this is an API, not a static site).
4. Add **Environment Variables** (Settings → Environment Variables). Add these for **Production** (and optionally Preview):

   | Name | Value | Notes |
   |------|--------|--------|
   | `MONGO_URI` | `mongodb+srv://user:pass@cluster.mongodb.net/certready?retryWrites=true&w=majority` | Your Atlas connection string |
   | `JWT_SECRET` | (long random string, e.g. 32+ chars) | Generate with `openssl rand -hex 32` |
   | `STRIPE_SECRET_KEY` | `sk_live_xxxx` | From Stripe Dashboard → Developers → API keys |
   | `STRIPE_WEBHOOK_SECRET` | (leave empty for now) | You’ll add this after creating the webhook in Step 2 |
   | `CLIENT_URL` | `https://www.certready.ca` | Frontend origin (no trailing slash). Use your Vercel frontend URL until the domain is live. |
   | `NODE_ENV` | `production` | Optional but recommended |

5. Click **Deploy**.
6. When the deploy finishes, open your project’s **Settings → Domains**. You can add a subdomain like **`api.certready.ca`** (recommended) so your API is at `https://api.certready.ca`.  
   - If you don’t add a domain yet, the backend URL will be like `https://certready-api.vercel.app`. You’ll use this as `VITE_API_URL` in Step 3.
7. **Note the backend base URL** (e.g. `https://api.certready.ca` or `https://certready-api.vercel.app`). The frontend will call `/api/...` on this URL, so the base URL is the origin **without** `/api` (e.g. `https://api.certready.ca`).

---

## Step 2 — Stripe webhook (production)

Do this **after** the backend is deployed and you have its URL.

1. In [Stripe Dashboard](https://dashboard.stripe.com) go to **Developers → Webhooks**.
2. Click **Add endpoint**.
3. **Endpoint URL**:  
   `https://api.certready.ca/api/payments/webhook`  
   (or `https://certready-api.vercel.app/api/payments/webhook` if you didn’t add a custom domain).
4. Select event: **`checkout.session.completed`**.
5. Click **Add endpoint**.
6. Open the new endpoint and **Reveal** the **Signing secret** (starts with `whsec_`).
7. In Vercel, open your **backend** project → **Settings → Environment Variables**.
8. Add or update:
   - **Name**: `STRIPE_WEBHOOK_SECRET`
   - **Value**: `whsec_xxxx` (the signing secret you copied).
9. **Redeploy** the backend (Deployments → … → Redeploy) so it uses the new secret.

Use **live** Stripe keys (`sk_live_...`, `pk_live_...`) for production. Keep test keys for local development.

---

## Step 3 — Deploy the frontend to Vercel

1. In Vercel, click **Add New…** → **Project** and import the **same** repository again (second project).
2. Configure this project for the **client**:
   - **Project Name**: e.g. `certready` or `certready-app`.
   - **Root Directory**: **`client`**.
   - **Framework Preset**: **Vite**.
   - **Build Command**: `npm run build` (default).
   - **Output Directory**: `dist` (default).
3. Add **Environment Variables** for **Production** (and optionally Preview):

   | Name | Value |
   |------|--------|
   | `VITE_API_URL` | Your backend base URL **including** `/api`, e.g. `https://api.certready.ca/api` (or `https://certready-api.vercel.app/api` if you didn’t add a custom domain). The client sends paths like `/auth/me`; the backend serves them under `/api`, so the full URL is `https://api.certready.ca/api/auth/me`. |
   | `VITE_STRIPE_PUBLISHABLE_KEY` | `pk_live_xxxx` (Stripe publishable key) |

4. Click **Deploy**.
5. After deploy, the site will be live at e.g. `https://certready.vercel.app`. You’ll add certready.ca in the next step.

---

## Step 4 — Add your domain (certready.ca)

1. In your **frontend** Vercel project, go to **Settings → Domains**.
2. Add **`certready.ca`** and, if you want, **`www.certready.ca`**.
3. Vercel will show the required DNS records (usually an **A** record or **CNAME**).
4. In your domain registrar (where you bought certready.ca), add:
   - For **apex** `certready.ca`: the A record Vercel gives (e.g. `76.76.21.21`).
   - For **www**: CNAME `www` → `cname.vercel-dns.com` (or the value Vercel shows).
5. Wait for DNS to propagate (minutes to a few hours). Vercel will issue SSL automatically.

Optional: In **Settings → Domains**, set **www** as primary so that **certready.ca** redirects to **www.certready.ca** (or the opposite). Your app and SEO are already set for **www.certready.ca** (e.g. in `sitemap.xml` and canonical URLs).

---

## Step 5 — Point frontend to production backend and domain

1. In the **backend** project, set **`CLIENT_URL`** to your **production** frontend origin:
   - `https://www.certready.ca` (or `https://certready.ca` if you use apex as primary).
   This must match the origin the browser uses when visiting your site (no trailing slash).
2. In the **frontend** project, ensure **`VITE_API_URL`** is:
   - `https://api.certready.ca/api` (if you added the api subdomain in Step 1), or  
   - `https://certready-api.vercel.app/api` (if using the default Vercel URL).
3. Redeploy both projects after any env change if Vercel didn’t auto-redeploy.

---

## Step 6 — Seed the database

After the backend is deployed and has a valid `MONGO_URI`:

1. **Option A — Run seed from your machine (easiest)**  
   - In the project root:  
     `cd server && node seed.js`  
   - Ensure the `server/.env` used locally has the **same** `MONGO_URI` as production (your Atlas cluster).  
   - This creates the Course documents and any initial data in the DB that your app expects.

2. **Option B — Run in Vercel**  
   - Vercel doesn’t give you a long-running shell, so you can’t reliably run `node seed.js` there. Use Option A or a one-off script run locally or in a different environment that can connect to the same MongoDB.

---

## Step 7 — Post-deploy checklist

- [ ] **Backend**
  - [ ] Deployed with root directory **`server`**.
  - [ ] Env vars set: `MONGO_URI`, `JWT_SECRET`, `STRIPE_SECRET_KEY`, `STRIPE_WEBHOOK_SECRET`, `CLIENT_URL`, `NODE_ENV`.
  - [ ] Stripe webhook created for **production** URL and signing secret added to backend env.
  - [ ] Backend redeployed after adding `STRIPE_WEBHOOK_SECRET`.
- [ ] **Frontend**
  - [ ] Deployed with root directory **`client`**, framework **Vite**, output **dist**.
  - [ ] Env vars: `VITE_API_URL` = `https://api.certready.ca/api` (or your backend URL + `/api`), `VITE_STRIPE_PUBLISHABLE_KEY` = `pk_live_...`.
  - [ ] Domain **certready.ca** (and/or **www.certready.ca**) added and DNS set at registrar.
- [ ] **Database**
  - [ ] Seeded (e.g. `cd server && node seed.js` with production `MONGO_URI`).
- [ ] **Testing**
  - [ ] Open `https://www.certready.ca` (or your chosen domain).
  - [ ] Register / log in, purchase a course with a live card (or Stripe test card if still in test mode).
  - [ ] Confirm webhook in Stripe Dashboard (Developers → Webhooks → your endpoint → events).
  - [ ] Confirm access to paid content after purchase.

---

## Summary: two projects, one domain

| Project   | Root Directory | Purpose              | URL example              |
|----------|----------------|----------------------|---------------------------|
| certready (frontend) | `client`  | SPA (Vite/React)     | https://www.certready.ca |
| certready-api (backend) | `server` | Node API + Stripe webhook | https://api.certready.ca |

- **Frontend** env: `VITE_API_URL`, `VITE_STRIPE_PUBLISHABLE_KEY`.
- **Backend** env: `MONGO_URI`, `JWT_SECRET`, `STRIPE_SECRET_KEY`, `STRIPE_WEBHOOK_SECRET`, `CLIENT_URL`.
- **Stripe**: Live keys in production; webhook URL = `https://api.certready.ca/api/payments/webhook` (or your backend URL + `/api/payments/webhook`).

---

## Local development

- **Client**: `cd client && npm run dev` (uses `VITE_API_URL` from `client/.env` or defaults to `/api` with a proxy).
- **Server**: `cd server && node index.js` (uses `server/.env`).
- **Stripe webhooks locally**: use [Stripe CLI](https://stripe.com/docs/stripe-cli):  
  `stripe listen --forward-to localhost:5000/api/payments/webhook`  
  and set `STRIPE_WEBHOOK_SECRET` in `server/.env` to the CLI’s secret.

Once these steps are done, CertReady is in production at **certready.ca** with the backend on Vercel and Stripe handling payments.
