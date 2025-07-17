import express from 'express';
import authRoutes from './src/routes/auth.route.js';
import messageRoutes from './src/routes/message.route.js';
import dotenv from 'dotenv';
import { connectDB } from './src/lib/db.js';
import cookieParser from 'cookie-parser';
import cors from "cors";
import { app, server } from './src/lib/socket.js';


//const app = express();
dotenv.config();
app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

const PORT = process.env.PORT;

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);

// app.listen(5001, () => {
//     console.log("server is running on PORT:" + PORT);
//     connectDB();
// })  

server.listen(5001, () => {
    console.log("server is running on PORT:" + PORT);
    connectDB();
})  