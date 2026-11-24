import mongoose from 'mongoose';
import dotenv from 'dotenv';
import connectDB from '../config/db.js';
import Promo from '../models/Promo.js';
import { BLACK_FRIDAY_PROMO } from '../config/blackFridayPromo.js';

dotenv.config();

async function run() {
  await connectDB();

  try {
    await Promo.findOneAndUpdate(
      { code: BLACK_FRIDAY_PROMO.code },
      {
        $set: BLACK_FRIDAY_PROMO,
        $unset: { discountPercent: '' },
      },
      { upsert: true, new: true, setDefaultsOnInsert: true, runValidators: true }
    );
    console.log('Created or updated BLACKFRIDAY promo (50% off through Cyber Monday).');
  } catch (error) {
    console.error('Failed to upsert BLACKFRIDAY promo:', error);
    process.exitCode = 1;
  } finally {
    await mongoose.disconnect();
  }
}

run();
