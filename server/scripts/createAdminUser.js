import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Explicitly resolve server/.env regardless of current working directory
dotenv.config({ path: join(__dirname, '../.env') });
// Also fallback to default root .env if present
dotenv.config();

import connectDB from '../config/db.js';
import User from '../models/User.js';

/**
 * Script to create or promote an admin user.
 * 
 * Usage:
 *   node scripts/createAdminUser.js <email> [password] [name]
 * 
 * Example:
 *   node scripts/createAdminUser.js admin@certready.ca MySecurePass123 "Admin User"
 */
async function main() {
  const email = process.argv[2];
  const password = process.argv[3] || 'Andrey85!c';
  const name = process.argv[4] || 'Admin User';

  if (!email) {
    console.error('❌ Please provide an email address.');
    console.log('Usage: node scripts/createAdminUser.js <email> [password] [name]');
    process.exit(1);
  }

  await connectDB();

  const normalizedEmail = email.trim().toLowerCase();
  let user = await User.findOne({ email: normalizedEmail });

  if (user) {
    if (password) {
      user.password = password;
      await user.save();
      console.log(`✅ Updated existing user "${user.name}" (${normalizedEmail}) password.`);
    } else {
      console.log(`ℹ️ Existing user found: "${user.name}" (${normalizedEmail}).`);
    }
  } else {
    user = await User.create({
      name,
      email: normalizedEmail,
      password,
    });
    console.log(`✅ Created new user "${name}" (${normalizedEmail}).`);
  }

  const currentAdminEmails = (process.env.ADMIN_EMAILS || '')
    .split(',')
    .map((e) => e.trim().toLowerCase())
    .filter(Boolean);

  console.log('\n---------------------------------------------------------');
  console.log('🔑 ADMIN ACCESS STATUS:');
  console.log(`User email: ${normalizedEmail}`);
  if (currentAdminEmails.includes(normalizedEmail)) {
    console.log('✅ This email is ALREADY present in ADMIN_EMAILS environment variable.');
  } else {
    console.log('⚠️  IMPORTANT NEXT STEP:');
    console.log(`Add this email to server/.env:`);
    console.log(`ADMIN_EMAILS=${currentAdminEmails.concat(normalizedEmail).join(',')}`);
  }
  console.log('---------------------------------------------------------\n');

  process.exit(0);
}

main().catch((err) => {
  console.error('Error in createAdminUser:', err);
  process.exit(1);
});
