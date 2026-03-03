import mongoose from 'mongoose';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import Course from './models/Course.js';

dotenv.config();

const courses = [
  {
    slug: 'hairstylist-332a',
    title: 'Hairstylist Certification Exam Prep',
    subtitle: 'Complete Study Guide — Skilled Trades Ontario Trade 332A',
    description: 'Pass your Skilled Trades Ontario Hairstylist (332A) certification exam with confidence. 15 chapters, 75+ practice questions, full mock exam — all based on the official STO curriculum standard.',
    trade: 'Hairstylist',
    tradeCode: '332A',
    price: 4999,
    discountPrice: 2999,
    discountCap: 100,
    currency: 'cad',
    totalChapters: 15,
    totalQuestions: 75,
    isPublished: true,
    features: [
      '15 comprehensive chapters',
      '75+ practice questions with explanations',
      'Full 50-question mock exam',
      '60+ term glossary',
      'Covers STO Levels 1 & 2 (480 hrs)',
      'Lifetime access',
    ],
  },
  {
    slug: 'plumber-306a',
    title: 'Plumber (Red Seal 306A) Exam Prep',
    subtitle: 'Complete study guide — Red Seal Interprovincial Exam, 125 questions',
    description: 'Prepare for the Red Seal Plumber (306A) interprovincial exam. 15 chapters covering all 7 Major Work Activities, practice questions, formulas reference, and exam strategy.',
    trade: 'Plumber',
    tradeCode: '306A',
    price: 5999,
    discountPrice: 2999,
    discountCap: 100,
    currency: 'cad',
    totalChapters: 15,
    totalQuestions: 125,
    isPublished: true,
    features: [
      '15 chapters covering all 7 Major Work Activities (MWA)',
      '125+ practice questions with explanations',
      'Red Seal–style mock exam and exam strategy',
      'Formulas reference and key terms glossary',
      'Based on Red Seal Occupational Standard (RSOS) – Plumber 2023',
      'Lifetime access',
    ],
  },
];

connectDB().then(async () => {
  try {
    await Course.deleteMany({});
    await Course.insertMany(courses);
    console.log('Seeded courses successfully');
    process.exit(0);
  } catch (error) {
    console.error('Error seeding:', error);
    process.exit(1);
  }
});
