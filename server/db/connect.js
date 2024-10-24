import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

const DBConnection = async () => {
    
    
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}`)
        console.log(`\n MongoDB connected !! DB HOST: ${connectionInstance.connection.host}`);
    } catch (error) {
        console.error('Error while connecting with database', error.message);
    }
}

export default DBConnection;