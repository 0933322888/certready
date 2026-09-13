import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

const connectDB = async () => {
  const uri = process.env.MONGO_URI;
  if (!uri || typeof uri !== 'string') {
    console.error('MONGO_URI must be a non-empty string. Set it in server/.env');
    process.exit(1);
  }
  try {
    const conn = await mongoose.connect(uri);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

export default connectDB;
