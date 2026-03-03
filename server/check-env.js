import dotenv from 'dotenv';

dotenv.config();

console.log('\n🔍 Checking environment variables...\n');

const requiredVars = [
  'MONGO_URI',
  'JWT_SECRET',
  'STRIPE_SECRET_KEY',
  'CLIENT_URL',
];

const optionalVars = [
  'STRIPE_WEBHOOK_SECRET',
  'PORT',
  'NODE_ENV',
];

let allGood = true;

console.log('Required variables:');
requiredVars.forEach(varName => {
  const value = process.env[varName];
  if (value) {
    // Mask sensitive values
    if (varName.includes('SECRET') || varName.includes('KEY') || varName.includes('URI')) {
      const masked = value.length > 20 
        ? value.substring(0, 10) + '...' + value.substring(value.length - 4)
        : '***';
      console.log(`  ✅ ${varName}: ${masked}`);
    } else {
      console.log(`  ✅ ${varName}: ${value}`);
    }
  } else {
    console.log(`  ❌ ${varName}: NOT SET`);
    allGood = false;
  }
});

console.log('\nOptional variables:');
optionalVars.forEach(varName => {
  const value = process.env[varName];
  if (value) {
    console.log(`  ✅ ${varName}: ${value}`);
  } else {
    console.log(`  ⚠️  ${varName}: not set (using default)`);
  }
});

if (!allGood) {
  console.log('\n❌ Some required environment variables are missing!');
  console.log('Please create a .env file in the server/ directory with all required variables.');
  console.log('See server/.env.example for reference.\n');
  process.exit(1);
} else {
  console.log('\n✅ All required environment variables are set!\n');
  process.exit(0);
}
