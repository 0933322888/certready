// Quick test to verify .env file is being read
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { existsSync } from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

console.log('\n🔍 Environment Variable Test\n');
console.log('Current directory:', __dirname);
console.log('Looking for .env file at:', join(__dirname, '.env'));
console.log('.env file exists:', existsSync(join(__dirname, '.env')));
console.log('\nLoading .env...\n');

const result = dotenv.config({ path: join(__dirname, '.env') });

if (result.error) {
  console.error('❌ Error loading .env:', result.error);
} else {
  console.log('✅ .env file loaded successfully');
}

console.log('\nEnvironment variables:');
console.log('STRIPE_SECRET_KEY:', process.env.STRIPE_SECRET_KEY ? 
  process.env.STRIPE_SECRET_KEY.substring(0, 12) + '...' : 'NOT SET');
console.log('MONGO_URI:', process.env.MONGO_URI ? 'SET' : 'NOT SET');
console.log('JWT_SECRET:', process.env.JWT_SECRET ? 'SET' : 'NOT SET');
console.log('CLIENT_URL:', process.env.CLIENT_URL || 'NOT SET');
console.log('\n');
