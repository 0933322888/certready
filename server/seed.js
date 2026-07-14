import mongoose from 'mongoose';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import Course from './models/Course.js';
import Promo from './models/Promo.js';
import { seedCourses } from './data/seedCourses.js';

dotenv.config();

const promos = [
  {
    code: 'GET40',
    type: 'fixed_price',
    amountCents: 2999,
    public: true,
    usageCapPerCourse: 100,
    isActive: true,
  },
  {
    code: 'SUPADMC0D3',
    type: 'free',
    amountCents: 0,
    public: false,
    isActive: true,
  },
];

connectDB().then(async () => {
  try {
    await Course.deleteMany({});
    await Course.insertMany(seedCourses);
    console.log('Seeded courses successfully');

    // Upsert promos so we don't wipe existing promos if seed is run again
    for (const p of promos) {
      await Promo.findOneAndUpdate(
        { code: p.code },
        { $set: p },
        { upsert: true, new: true }
      );
    }
    // Retire renamed code so SPRING2026 no longer works at checkout
    await Promo.updateOne(
      { code: 'SPRING2026' },
      { $set: { isActive: false } }
    );
    console.log('Seeded promos successfully');
    process.exit(0);
  } catch (error) {
    console.error('Error seeding:', error);
    process.exit(1);
  }
});
