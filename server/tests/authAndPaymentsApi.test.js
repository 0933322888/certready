import { describe, it, expect, vi } from 'vitest';
import request from 'supertest';
import { createApp } from '../app.js';
import User from '../models/User.js';

vi.mock('../models/User.js');

describe('API Integration: Auth Endpoints Validation', () => {
  const app = createApp();

  describe('POST /api/auth/register validation', () => {
    it('rejects missing fields with 400', async () => {
      const res = await request(app)
        .post('/api/auth/register')
        .send({ email: 'test@example.com' });

      expect(res.status).toBe(400);
      expect(res.body.message).toBe('Please provide all fields');
    });

    it('rejects short passwords under 6 characters with 400', async () => {
      const res = await request(app)
        .post('/api/auth/register')
        .send({ name: 'Alex', email: 'alex@example.com', password: '123' });

      expect(res.status).toBe(400);
      expect(res.body.message).toBe('Password must be at least 6 characters');
    });

    it('rejects registration when email already exists', async () => {
      vi.spyOn(User, 'findOne').mockResolvedValue({ _id: 'u1', email: 'alex@example.com' });

      const res = await request(app)
        .post('/api/auth/register')
        .send({ name: 'Alex', email: 'alex@example.com', password: 'password123' });

      expect(res.status).toBe(400);
      expect(res.body.message).toBe('User already exists');
    });
  });

  describe('POST /api/auth/login validation', () => {
    it('rejects login requests missing email or password with 400', async () => {
      const res = await request(app)
        .post('/api/auth/login')
        .send({ email: 'alex@example.com' });

      expect(res.status).toBe(400);
      expect(res.body.message).toBe('Please provide email and password');
    });

    it('returns 401 when user is not found', async () => {
      vi.spyOn(User, 'findOne').mockResolvedValue(null);

      const res = await request(app)
        .post('/api/auth/login')
        .send({ email: 'nonexistent@example.com', password: 'password123' });

      expect(res.status).toBe(401);
      expect(res.body.message).toBe('Invalid credentials');
    });
  });

  describe('POST /api/payments/validate-promo auth check', () => {
    it('rejects unauthenticated requests to validate-promo with 401', async () => {
      const res = await request(app)
        .post('/api/payments/validate-promo')
        .send({ promoCode: 'SAVE20', courseSlug: 'plumber-306a' });

      expect(res.status).toBe(401);
      expect(res.body.message).toContain('Not authorized');
    });
  });
});
