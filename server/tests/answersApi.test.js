import { describe, it, expect, vi, beforeEach } from 'vitest';
import request from 'supertest';
import jwt from 'jsonwebtoken';
import { createApp } from '../app.js';
import User from '../models/User.js';
import UserAnswer from '../models/UserAnswer.js';

vi.mock('../models/User.js');
vi.mock('../models/UserAnswer.js');

describe('API Integration: UserAnswer Endpoints', () => {
  const app = createApp();
  const mockUserId = '507f1f77bcf86cd799439011';
  const secret = process.env.JWT_SECRET || 'testsecret';

  let token;

  beforeEach(() => {
    vi.clearAllMocks();
    process.env.JWT_SECRET = secret;
    token = jwt.sign({ id: mockUserId }, secret, { expiresIn: '1d' });

    vi.spyOn(User, 'findById').mockReturnValue({
      select: vi.fn().mockResolvedValue({
        _id: mockUserId,
        name: 'Test Apprentice',
        email: 'apprentice@example.com',
      }),
    });
  });

  describe('Authentication protection', () => {
    it('rejects unauthenticated requests to POST /api/answers with 401', async () => {
      const res = await request(app)
        .post('/api/answers')
        .send({
          courseId: 'carpenter-403a',
          questionId: 'q-101',
          selectedIndex: 2,
          isCorrect: true,
        });

      expect(res.status).toBe(401);
      expect(res.body.message).toContain('Not authorized');
    });

    it('rejects unauthenticated requests to POST /api/answers/batch with 401', async () => {
      const res = await request(app)
        .post('/api/answers/batch')
        .send({
          courseId: 'carpenter-403a',
          answers: [{ questionId: 'q-1', selectedIndex: 0, isCorrect: true }],
        });

      expect(res.status).toBe(401);
      expect(res.body.message).toContain('Not authorized');
    });
  });

  describe('POST /api/answers', () => {
    it('returns 400 when missing required fields', async () => {
      const res = await request(app)
        .post('/api/answers')
        .set('Authorization', `Bearer ${token}`)
        .send({
          courseId: 'plumber-306a',
          // missing questionId, selectedIndex, isCorrect
        });

      expect(res.status).toBe(400);
      expect(res.body.message).toBe('Missing required fields');
    });

    it('saves/upserts an individual answer with default chapterId="practice"', async () => {
      const mockSaved = {
        _id: 'ans_123',
        user: mockUserId,
        courseId: 'carpenter',
        chapterId: 'practice',
        questionId: 'carpenter-q1',
        selectedIndex: 1,
        isCorrect: true,
        answeredAt: new Date(),
      };

      vi.spyOn(UserAnswer, 'findOneAndUpdate').mockResolvedValue(mockSaved);

      const res = await request(app)
        .post('/api/answers')
        .set('Authorization', `Bearer ${token}`)
        .send({
          courseId: 'carpenter',
          questionId: 'carpenter-q1',
          selectedIndex: 1,
          isCorrect: true,
        });

      expect(res.status).toBe(200);
      expect(res.body.success).toBe(true);
      expect(res.body.answer.questionId).toBe('carpenter-q1');
      expect(res.body.answer.isCorrect).toBe(true);

      expect(UserAnswer.findOneAndUpdate).toHaveBeenCalledWith(
        { user: mockUserId, questionId: 'carpenter-q1' },
        expect.objectContaining({
          user: mockUserId,
          courseId: 'carpenter',
          chapterId: 'practice',
          questionId: 'carpenter-q1',
          selectedIndex: 1,
          isCorrect: true,
        }),
        { upsert: true, new: true }
      );
    });

    it('preserves specific chapterId when provided', async () => {
      vi.spyOn(UserAnswer, 'findOneAndUpdate').mockResolvedValue({ success: true });

      const res = await request(app)
        .post('/api/answers')
        .set('Authorization', `Bearer ${token}`)
        .send({
          courseId: 'plumber-306a',
          chapterId: 'ch-02',
          questionId: 'q02-01',
          selectedIndex: 3,
          isCorrect: false,
        });

      expect(res.status).toBe(200);
      expect(UserAnswer.findOneAndUpdate).toHaveBeenCalledWith(
        { user: mockUserId, questionId: 'q02-01' },
        expect.objectContaining({
          chapterId: 'ch-02',
        }),
        { upsert: true, new: true }
      );
    });
  });

  describe('POST /api/answers/batch', () => {
    it('returns 400 when missing courseId or answers array', async () => {
      const res = await request(app)
        .post('/api/answers/batch')
        .set('Authorization', `Bearer ${token}`)
        .send({
          courseId: 'welder-456a',
          answers: [],
        });

      expect(res.status).toBe(400);
      expect(res.body.message).toContain('non-empty answers array');
    });

    it('performs bulkWrite successfully for multiple questions', async () => {
      vi.spyOn(UserAnswer, 'bulkWrite').mockResolvedValue({ ok: 1, nUpserted: 3 });

      const res = await request(app)
        .post('/api/answers/batch')
        .set('Authorization', `Bearer ${token}`)
        .send({
          courseId: 'welder-456a',
          chapterId: 'mock-exam',
          answers: [
            { questionId: 'w-1', selectedIndex: 0, isCorrect: true },
            { questionId: 'w-2', selectedIndex: 2, isCorrect: false },
            { questionId: 'w-3', selectedIndex: 1, isCorrect: true },
          ],
        });

      expect(res.status).toBe(200);
      expect(res.body.success).toBe(true);
      expect(res.body.count).toBe(3);
      expect(UserAnswer.bulkWrite).toHaveBeenCalledTimes(1);
    });
  });

  describe('GET /api/answers/:courseId/:chapterId', () => {
    it('returns answer map keyed by questionId', async () => {
      const date = new Date();
      vi.spyOn(UserAnswer, 'find').mockResolvedValue([
        {
          questionId: 'q1',
          selectedIndex: 2,
          isCorrect: true,
          answeredAt: date,
        },
        {
          questionId: 'q2',
          selectedIndex: 0,
          isCorrect: false,
          answeredAt: date,
        },
      ]);

      const res = await request(app)
        .get('/api/answers/carpenter/ch-1')
        .set('Authorization', `Bearer ${token}`);

      expect(res.status).toBe(200);
      expect(res.body.answers).toHaveProperty('q1');
      expect(res.body.answers.q1.selectedIndex).toBe(2);
      expect(res.body.answers.q1.isCorrect).toBe(true);
      expect(res.body.answers).toHaveProperty('q2');
      expect(res.body.answers.q2.isCorrect).toBe(false);
    });
  });

  describe('DELETE /api/answers/:questionId', () => {
    it('deletes an answer by questionId', async () => {
      vi.spyOn(UserAnswer, 'findOneAndDelete').mockResolvedValue({ _id: 'ans_1' });

      const res = await request(app)
        .delete('/api/answers/q-101')
        .set('Authorization', `Bearer ${token}`);

      expect(res.status).toBe(200);
      expect(res.body.success).toBe(true);
      expect(UserAnswer.findOneAndDelete).toHaveBeenCalledWith({
        user: mockUserId,
        questionId: 'q-101',
      });
    });
  });
});
