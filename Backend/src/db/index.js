import mongoose from 'mongoose';
import {DB_NAME} from '../constants.js';


const connectDB = async () => {
    try {
        const connection = await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`)
        console.log(`MongoDB connected: ${connection.connection.host}`);
    } catch (error) {
        console.error('Failed to connect the MongoDB with error: ', error);
        process.exit(1);
    }
};

export default connectDB;
