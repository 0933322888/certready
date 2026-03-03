import mongoose from 'mongoose';
import dotenv from 'dotenv';
import connectDB from '../config/db.js';
import User from '../models/User.js';
import Course from '../models/Course.js';
import Purchase from '../models/Purchase.js';

dotenv.config();

const simulatePurchase = async () => {
  try {
    await connectDB();

    // Get user by email (change this to your test user email)
    const userEmail = process.argv[2] || 'test@example.com';
    const user = await User.findOne({ email: userEmail });

    if (!user) {
      console.error(`User with email ${userEmail} not found.`);
      console.log('Available users:');
      const users = await User.find().select('email name');
      users.forEach(u => console.log(`  - ${u.email} (${u.name})`));
      process.exit(1);
    }

    // Get the hairstylist course
    const course = await Course.findOne({ slug: 'hairstylist-332a' });
    if (!course) {
      console.error('Hairstylist course not found. Run seed.js first.');
      process.exit(1);
    }

    // Check if user already owns the course
    if (user.purchases.includes(course._id)) {
      console.log(`User ${userEmail} already owns this course.`);
      process.exit(0);
    }

    // Create a purchase record
    const purchase = await Purchase.create({
      user: user._id,
      course: course._id,
      stripeSessionId: `manual_${Date.now()}`,
      amount: course.price,
      currency: course.currency,
      status: 'completed',
      completedAt: new Date(),
    });

    // Add course to user's purchases
    user.purchases.push(course._id);
    await user.save();

    console.log(`✅ Purchase simulated successfully!`);
    console.log(`   User: ${user.name} (${user.email})`);
    console.log(`   Course: ${course.title}`);
    console.log(`   Purchase ID: ${purchase._id}`);
    console.log(`\n   User can now access the full course at: /learn/hairstylist-332a`);

    process.exit(0);
  } catch (error) {
    console.error('Error:', error);
    process.exit(1);
  }
};

simulatePurchase();
