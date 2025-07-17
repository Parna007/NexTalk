import express from 'express';
import authRoutes from './src/routes/auth.route.js';
import messageRoutes from './src/routes/message.route.js';
import dotenv from 'dotenv';
import { connectDB } from './src/lib/db.js';
import cookieParser from 'cookie-parser';


const app = express();
dotenv.config();
app.use(express.json());
app.use(cookieParser());

const PORT = process.env.PORT;

app.use("/api/auth", authRoutes);
app.use("/api/message", messageRoutes);

app.listen(5001, () => {
    console.log("server is running on PORT:" + PORT);
    connectDB();
})  