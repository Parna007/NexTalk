import express from 'express';
import authRoutes from './src/routes/auth.route.js';
import dotenv from 'dotenv';
import { connectDB } from './src/lib/db.js';


const app = express();
dotenv.config();

const PORT = process.env.PORT;

app.use("/api/auth", authRoutes);

app.listen(5001, () => {
    console.log("server is running on PORT:" + PORT);
    connectDB();
})  