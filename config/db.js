import mongoose from "mongoose"
import Colors from "colors";
const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URL);
        console.log(`connnected to database ${conn.connection.host}`.bgGreen.white);
    } catch (error) {
        console.log(`Error in mongoDB ${error}`.bgRed.white);
    }
};

export default connectDB;