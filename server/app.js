import express from 'express';
import cors from 'cors';
import errorHandler from './middleware/errorHandler.js';
import authRoutes from './routes/auth.js';
import courseRoutes from './routes/courses.js';
import paymentRoutes from './routes/payments.js';
import promosRoutes from './routes/promos.js';
import userRoutes from './routes/users.js';
import answerRoutes from './routes/answers.js';
import contactRoutes from './routes/contact.js';
import practiceRoutes from './routes/practice.js';

export function createApp() {
  const app = express();

  // Stripe webhook must receive raw body — register BEFORE express.json()
  app.use('/api/payments/webhook', express.raw({ type: 'application/json' }));
  app.use(express.json());
  app.use(cors({ origin: process.env.CLIENT_URL, credentials: true }));

  // Routes
  app.use('/api/auth', authRoutes);
  app.use('/api/courses', courseRoutes);
  app.use('/api/payments', paymentRoutes);
  app.use('/api/promos', promosRoutes);
  app.use('/api/users', userRoutes);
  app.use('/api/answers', answerRoutes);
  app.use('/api/contact', contactRoutes);
  app.use('/api/practice', practiceRoutes);

  app.get('/api/health', (_, res) => res.json({ status: 'ok' }));

  // Error handler
  app.use(errorHandler);

  return app;
}
