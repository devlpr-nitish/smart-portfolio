import mongoose from 'mongoose';

if (!process.env.MONGODB_URL) {
  throw new Error('Invalid/Missing environment variable: "MONGODB_URL"');
}

const uri = process.env.MONGODB_URL;

let clientPromise: Promise<typeof mongoose>;

declare global {
  var _mongooseClientPromise: Promise<typeof mongoose>;
}

export async function connectToMongoDB() {
  try {
    // Mongoose Connection
    await mongoose.connect(uri);
    console.log('MongoDB connected successfully via Mongoose');
  } catch (error) {
    console.error('MongoDB connection failed:', error);
    throw error;
  }
}

if (process.env.NODE_ENV === 'development') {
  // Global to store the promise and avoid new connection on hot reload
  if (!global._mongooseClientPromise) {
    global._mongooseClientPromise = mongoose.connect(uri);
  }
  clientPromise = global._mongooseClientPromise;
} else {
  clientPromise = mongoose.connect(uri);
}

export default clientPromise;
