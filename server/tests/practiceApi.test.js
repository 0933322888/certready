import { describe, it, expect, vi } from 'vitest';
import request from 'supertest';
import { createApp } from '../app.js';
import Course from '../models/Course.js';
import PracticeQuestion from '../models/PracticeQuestion.js';

vi.mock('../models/Course.js');
vi.mock('../models/PracticeQuestion.js');

describe('API Integration: Health & Practice Endpoints', () => {
  const app = createApp();

  describe('GET /api/health', () => {
    it('returns status ok with 200', async () => {
      const res = await request(app).get('/api/health');
      expect(res.status).toBe(200);
      expect(res.body).toEqual({ status: 'ok' });
    });
  });

  describe('GET /api/practice/:tradeSlug/count', () => {
    it('returns question count for a trade', async () => {
      vi.spyOn(PracticeQuestion, 'countDocuments').mockResolvedValue(125);

      const res = await request(app).get('/api/practice/carpenter/count');
      expect(res.status).toBe(200);
      expect(res.body).toEqual({ count: 125 });
      expect(PracticeQuestion.countDocuments).toHaveBeenCalledWith({ tradeSlug: 'carpenter' });
    });

    it('returns 500 when database error occurs', async () => {
      vi.spyOn(PracticeQuestion, 'countDocuments').mockRejectedValue(new Error('DB failure'));

      const res = await request(app).get('/api/practice/carpenter/count');
      expect(res.status).toBe(500);
      expect(res.body.message).toBe('DB failure');
    });
  });

  describe('GET /api/practice/:tradeSlug/topics', () => {
    it('returns aggregated topic list for a trade', async () => {
      const mockTopics = [
        { topicId: 'A', topicLabel: 'Common Occupational Skills' },
        { topicId: 'B', topicLabel: 'Planning and Layout' },
      ];
      vi.spyOn(PracticeQuestion, 'aggregate').mockResolvedValue(mockTopics);

      const res = await request(app).get('/api/practice/carpenter/topics');
      expect(res.status).toBe(200);
      expect(res.body).toEqual({ topics: mockTopics });
    });
  });

  describe('GET /api/practice/:tradeSlug/questions', () => {
    it('returns free tier questions capped at 20', async () => {
      const mockQuestions = [
        {
          _id: 'q1',
          tradeSlug: 'carpenter',
          topicId: 'A',
          topicLabel: 'Common Occupational Skills',
          question: 'What is the standard rise for residential stairs?',
          options: ['7 inches', '8 inches', '9 inches', '10 inches'],
          correctIndex: 0,
          explanation: 'Standard maximum rise is typically 7 to 7.75 inches.',
        },
      ];
      vi.spyOn(PracticeQuestion, 'aggregate').mockResolvedValue(mockQuestions);

      const res = await request(app).get('/api/practice/carpenter/questions');
      expect(res.status).toBe(200);
      expect(res.body.questions).toHaveLength(1);
      expect(res.body.questions[0].id).toBe('q1');
      expect(res.body.questions[0].question).toContain('standard rise');
      expect(res.body.hasFullAccess).toBe(false);
    });
  });
});
