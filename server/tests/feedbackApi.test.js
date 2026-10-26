import { beforeEach, describe, expect, it, vi } from 'vitest';
import request from 'supertest';
import jwt from 'jsonwebtoken';
import { createApp } from '../app.js';
import User from '../models/User.js';
import Purchase from '../models/Purchase.js';
import CourseFeedback from '../models/CourseFeedback.js';

vi.mock('../models/User.js');
vi.mock('../models/Purchase.js');
vi.mock('../models/CourseFeedback.js');

describe('Course feedback API', () => {
  const app = createApp();
  const userId = '507f1f77bcf86cd799439011';
  const purchaseId = '507f1f77bcf86cd799439012';
  const feedbackId = '507f1f77bcf86cd799439013';
  const secret = process.env.JWT_SECRET || 'testsecret';
  let token;

  beforeEach(() => {
    vi.clearAllMocks();
    process.env.JWT_SECRET = secret;
    process.env.ADMIN_EMAILS = 'admin@example.com';
    token = jwt.sign({ id: userId }, secret, { expiresIn: '1d' });
    vi.spyOn(User, 'findById').mockReturnValue({
      select: vi.fn().mockResolvedValue({
        _id: userId,
        name: 'Jamie Example-Smith',
        email: 'customer@example.com',
      }),
    });
  });

  it('requires authentication to list personal feedback', async () => {
    const response = await request(app).get('/api/feedback/mine');
    expect(response.status).toBe(401);
  });

  it('returns only approved feedback from the public endpoint', async () => {
    const publicReviews = [{
      _id: feedbackId,
      customerName: 'Jamie S.',
      text: 'Clear explanations and useful practice questions.',
      course: { title: 'Plumber Exam Prep', tradeCode: '306A' },
    }];
    vi.spyOn(CourseFeedback, 'find').mockReturnValue({
      populate: vi.fn().mockReturnValue({
        sort: vi.fn().mockReturnValue({ lean: vi.fn().mockResolvedValue(publicReviews) }),
      }),
    });

    const response = await request(app).get('/api/feedback/approved');
    expect(response.status).toBe(200);
    expect(response.body).toEqual(publicReviews);
    expect(CourseFeedback.find).toHaveBeenCalledWith({ status: 'approved' });
  });

  it('rejects feedback when the purchase does not belong to the user', async () => {
    vi.spyOn(Purchase, 'findOne').mockReturnValue({ populate: vi.fn().mockResolvedValue(null) });

    const response = await request(app)
      .post('/api/feedback')
      .set('Authorization', `Bearer ${token}`)
      .send({ purchaseId, text: 'A useful course with clear explanations.' });

    expect(response.status).toBe(403);
    expect(CourseFeedback.findOneAndUpdate).not.toHaveBeenCalled();
  });

  it('creates pending feedback using a private surname initial', async () => {
    const purchase = { _id: purchaseId, course: { _id: '507f1f77bcf86cd799439014' } };
    vi.spyOn(Purchase, 'findOne').mockReturnValue({ populate: vi.fn().mockResolvedValue(purchase) });
    vi.spyOn(CourseFeedback, 'findOneAndUpdate').mockReturnValue({
      populate: vi.fn().mockResolvedValue({ _id: feedbackId, status: 'pending' }),
    });

    const response = await request(app)
      .post('/api/feedback')
      .set('Authorization', `Bearer ${token}`)
      .send({ purchaseId, text: 'A useful course with clear explanations.' });

    expect(response.status).toBe(200);
    expect(CourseFeedback.findOneAndUpdate).toHaveBeenCalledWith(
      { purchase: purchaseId },
      expect.objectContaining({ customerName: 'Jamie E.', status: 'pending' }),
      expect.objectContaining({ upsert: true, new: true })
    );
  });

  it('requires a surname so public feedback can use the requested name format', async () => {
    vi.spyOn(User, 'findById').mockReturnValue({
      select: vi.fn().mockResolvedValue({ _id: userId, name: 'Jamie', email: 'customer@example.com' }),
    });
    const purchase = { _id: purchaseId, course: { _id: '507f1f77bcf86cd799439014' } };
    vi.spyOn(Purchase, 'findOne').mockReturnValue({ populate: vi.fn().mockResolvedValue(purchase) });

    const response = await request(app)
      .post('/api/feedback')
      .set('Authorization', `Bearer ${token}`)
      .send({ purchaseId, text: 'A useful course with clear explanations.' });

    expect(response.status).toBe(400);
    expect(response.body.message).toContain('first and last name');
    expect(CourseFeedback.findOneAndUpdate).not.toHaveBeenCalled();
  });

  it('requires admin access to moderate feedback', async () => {
    const response = await request(app)
      .patch(`/api/feedback/admin/${feedbackId}`)
      .set('Authorization', `Bearer ${token}`)
      .send({ status: 'approved' });

    expect(response.status).toBe(403);
  });

  it('allows an admin to approve feedback', async () => {
    process.env.ADMIN_EMAILS = 'customer@example.com';
    vi.spyOn(CourseFeedback, 'findByIdAndUpdate').mockReturnValue({
      populate: vi.fn().mockResolvedValue({ _id: feedbackId, status: 'approved' }),
    });

    const response = await request(app)
      .patch(`/api/feedback/admin/${feedbackId}`)
      .set('Authorization', `Bearer ${token}`)
      .send({ status: 'approved' });

    expect(response.status).toBe(200);
    expect(response.body.status).toBe('approved');
    expect(CourseFeedback.findByIdAndUpdate).toHaveBeenCalledWith(
      feedbackId,
      expect.objectContaining({ status: 'approved', moderatedAt: expect.any(Date) }),
      { new: true, runValidators: true }
    );
  });
});