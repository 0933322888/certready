import { describe, it, expect } from 'vitest';
import { TRADE_TOPICS, getTopicLabel } from '../scripts/practiceQuestions/tradeTopics.js';
import { getQuestions } from '../scripts/practiceQuestions/index.js';

describe('tradeTopics and practiceQuestions integrity', () => {
  it('has valid trade topic definitions for all major trades', () => {
    const trades = ['carpenter', 'construction-electrician', 'hairstylist', 'plumber'];
    trades.forEach((trade) => {
      expect(TRADE_TOPICS[trade]).toBeDefined();
      expect(Array.isArray(TRADE_TOPICS[trade])).toBe(true);
      expect(TRADE_TOPICS[trade].length).toBeGreaterThan(0);
    });
  });

  it('correctly resolves topic label with fallback', () => {
    const label = getTopicLabel('carpenter', 'A');
    expect(label).toBe('Common Occupational Skills');

    // Non-existent returns fallback
    const fallback = getTopicLabel('carpenter', 'NON_EXISTENT');
    expect(fallback).toBe('NON_EXISTENT');
  });

  it('verifies that each seeded practice question contains required properties', () => {
    const questions = getQuestions();
    expect(questions.length).toBeGreaterThan(0);

    for (const q of questions) {
      expect(q).toHaveProperty('tradeSlug');
      expect(typeof q.tradeSlug).toBe('string');

      expect(q).toHaveProperty('question');
      expect(typeof q.question).toBe('string');
      expect(q.question.trim().length).toBeGreaterThan(5);

      expect(q).toHaveProperty('options');
      expect(Array.isArray(q.options)).toBe(true);
      expect(q.options.length).toBeGreaterThanOrEqual(2);

      expect(q).toHaveProperty('correctIndex');
      expect(typeof q.correctIndex).toBe('number');
      expect(q.correctIndex).toBeGreaterThanOrEqual(0);
      expect(q.correctIndex).toBeLessThan(q.options.length);

      expect(q).toHaveProperty('explanation');
      expect(typeof q.explanation).toBe('string');
    }
  });
});
