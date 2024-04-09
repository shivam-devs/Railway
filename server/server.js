// importing the modules
import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import dotenv from 'dotenv'
import  train from "./routes/train.js";
import  auth from "./routes/auth.js";
import  book from "./routes/book.js";
import  user from "./routes/user.js";
import  paymentRoute from "./routes/payments.js";
import Razorpay from "razorpay"
// app config
const app = express();
dotenv.config();
//middlewares
app.use(
  cors({
    origin: "https://railway-vssut.vercel.app",
    methods: ["GET", "POST", "DELETE"],
    credentials: true,
  })
);
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
// routes
app.use("/api/train", train);
app.use("/api/user", user);
app.use("/api/book", book);
app.use("/api/auth", auth);
app.use(cors());
app.use("/api/payment", paymentRoute);
// mongodb
mongoose
  .connect("mongodb+srv://bdash625:1234Bx56@cluster0.xgqhej5.mongodb.net/?retryWrites=true&w=majority")
  .then(() => console.log(`Database Connected !`))
  .catch((err) => console.log(err));

//port
const PORT = process.env.PORT || 8000;
//payment
export const instance = new Razorpay({
  key_id: process.env.RAZORPAY_API_KEY,
  key_secret: process.env.RAZORPAY_APT_SECRET,
});

//listen
app.listen(PORT, () => console.log(`server started at ${PORT}`));
