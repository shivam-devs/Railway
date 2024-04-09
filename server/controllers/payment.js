import mongoose from "mongoose";
import train from "../models/trains.js";
import { instance } from "../server.js";
import crypto from "crypto";
import book from "../models/book.js";
import user from "../models/user.js";

export const checkout = async (req, res) => {
  try {
    const { train_id, user_id, amount } = req.body;
    if (!train_id || !user_id)
      return res.status(401).json({ msg: "please enter all the fields" });
    //creating order
    const options = {
      amount: Number(amount * 100),
      currency: "INR",
    };
    const order = await instance.orders.create(options);

    if (
      mongoose.Types.ObjectId.isValid(user_id) &&
      mongoose.Types.ObjectId.isValid(train_id)
    ) {
      const train_available = await train.findOne({ _id: train_id });
      const user_available = await user.findOne({ _id: user_id });
      if (!train_available)
        return res.status(401).json({ msg: "train_id not valid" });
      if (!user_available)
        return res.status(401).json({ msg: "user id not valid" });

      //Creating new book
      const newBook = new book({
        user: user_available._id,
        train: train_available._id,
        order_id: order.id,
      });
      await newBook
        .save()
        .then((book) => {
          res.json({ book, order });
        })
        .catch((err) => {
          res.json({ err });
        });
    }
  } catch (error) {
    return res.status(402).json(error);
  }
};

export const paymentVerification = async (req, res) => {
  const { razorpay_order_id, razorpay_payment_id, razorpay_signature } =
    req.body;
  if (!razorpay_order_id || !razorpay_payment_id || !razorpay_signature)
    return res.status(401).json({ msg: "please enter all the fields" });
  try {
    const body = razorpay_order_id + "|" + razorpay_payment_id;

    const expectedSignature = crypto
      .createHmac("sha256", process.env.RAZORPAY_APT_SECRET)
      .update(body.toString())
      .digest("hex");

    const isAuthentic = expectedSignature === razorpay_signature;

    if (isAuthentic) {
      // Database comes here
      const order_available = await book.findOne({ order_id: razorpay_order_id });
      if (!order_available)
        return res.status(401).json({ msg: "order_id not found" });
      const train_available = await train.findOne({
        _id: order_available.train,
      });
      if (!train_available)
        return res.status(401).json({ msg: "train_id not valid" });
      //update
      await train_available
        .updateOne({
          users: [...train_available.users, order_available.user],
        })
        .catch((err) => {
          console.log(err);
        });
      await order_available.updateOne({ payment: true }).catch((err) => {
        console.log(err);
      });
      res.redirect(`https://railway-vssut.vercel.app/`);
    } else {
      res.status(400).json({
        success: false,
      });
    }
  } catch (error) {
    return res.status(402).json(error);
  }
};
