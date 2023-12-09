import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config();

const uri = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.ez9cvju.mongodb.net/book-store-dbe?retryWrites=true&w=majority`;


async function connectToDatabase() {
    mongoose.connect(uri);

    return mongoose.connection;
}

export default connectToDatabase;