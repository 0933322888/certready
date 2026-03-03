# How to Simulate a Purchase

There are several ways to simulate a purchase for testing:

## Method 1: Stripe Test Cards (Recommended)

This is the most realistic way to test the full purchase flow:

1. **Make sure you're using Stripe test keys** in your `.env`:
   ```
   STRIPE_SECRET_KEY=sk_test_xxxxxxxxxxxx
   ```

2. **Start your servers**:
   ```bash
   npm run dev
   ```

3. **Set up Stripe webhook forwarding** (in a separate terminal):
   ```bash
   # Install Stripe CLI if you haven't: https://stripe.com/docs/stripe-cli
   stripe listen --forward-to localhost:5000/api/payments/webhook
   ```
   This will give you a webhook signing secret. Copy it to your `.env`:
   ```
   STRIPE_WEBHOOK_SECRET=whsec_xxxxxxxxxxxx
   ```

4. **Go through the purchase flow**:
   - Register/Login to your app
   - Navigate to the course page
   - Click "Purchase"
   - Use Stripe test card: `4242 4242 4242 4242`
   - Expiry: Any future date (e.g., 12/34)
   - CVC: Any 3 digits (e.g., 123)
   - ZIP: Any 5 digits (e.g., 12345)

5. **Complete the checkout** - Stripe will automatically send a webhook to complete the purchase.

## Method 2: Manual Database Update (Quick Testing)

For quick testing without going through Stripe:

1. **Make sure you have a user account** (register through the app)

2. **Run the simulation script**:
   ```bash
   cd server
   npm run simulate-purchase your-email@example.com
   ```

   Or without specifying email (uses 'test@example.com' by default):
   ```bash
   npm run simulate-purchase
   ```

3. **The script will**:
   - Find your user by email
   - Add the course to their purchases
   - Create a completed purchase record
   - Give you access to the full course

## Method 3: Direct Database Manipulation

If you want to manually update the database:

1. **Connect to MongoDB** (using MongoDB Compass, mongo shell, or your preferred tool)

2. **Find your user**:
   ```javascript
   db.users.findOne({ email: "your-email@example.com" })
   ```

3. **Find the course**:
   ```javascript
   db.courses.findOne({ slug: "hairstylist-332a" })
   ```

4. **Add course to user's purchases**:
   ```javascript
   db.users.updateOne(
     { email: "your-email@example.com" },
     { $push: { purchases: ObjectId("course_id_here") } }
   )
   ```

5. **Create a purchase record** (optional, for completeness):
   ```javascript
   db.purchases.insertOne({
     user: ObjectId("user_id_here"),
     course: ObjectId("course_id_here"),
     stripeSessionId: "manual_test_" + Date.now(),
     amount: 4999,
     currency: "cad",
     status: "completed",
     completedAt: new Date(),
     createdAt: new Date(),
     updatedAt: new Date()
   })
   ```

## Method 4: Stripe Dashboard Test Mode

1. Go to Stripe Dashboard → Developers → Webhooks
2. Create a test webhook endpoint pointing to your local server
3. Use Stripe's "Send test webhook" feature to simulate `checkout.session.completed` event
4. Make sure to use the correct webhook secret

## Verifying the Purchase

After simulating a purchase, verify it worked:

1. **Log in to your app**
2. **Check the Dashboard** - you should see the course listed
3. **Navigate to `/learn/hairstylist-332a`** - you should have access to all chapters
4. **Check the database**:
   ```bash
   # In MongoDB shell or Compass
   db.users.findOne({ email: "your-email@example.com" }, { purchases: 1 })
   ```

## Troubleshooting

- **"User not found"**: Make sure you've registered an account first
- **"Course not found"**: Run `npm run seed` in the server directory
- **Webhook not working**: Check that Stripe CLI is forwarding to the correct port
- **Still seeing locked chapters**: Clear your browser cache and refresh, or log out and log back in
