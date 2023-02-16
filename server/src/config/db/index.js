import mongoose from "mongoose";
import * as dotenv from "dotenv";
dotenv.config();

mongoose.set("strictQuery", true);
const URI = process.env.MONGODB_URI;

async function connect() {
    try {
        mongoose.connect(URI);
        console.log("Connect successfully!");
    } catch (error) {
        console.log("Connect failed");
    }
}

export { connect };
