import mongoose, { mongo } from "mongoose";

const uri = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.ez9cvju.mongodb.net/book-store-db?retryWrites=true&w=majority`;


async function connectToDatabase() {
    mongoose.connect(uri);
    return mongoose.connection;
}

export default connectToDatabase;