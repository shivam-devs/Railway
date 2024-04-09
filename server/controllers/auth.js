// importing the modules
import user from "../models/user.js";
import jwt from "jsonwebtoken";
import crypto from "crypto";
import dotenv from 'dotenv'
dotenv.config();

/*
method:POST
route:/api/auth/login
description: loging in an user
*/
const loginUser = async (req, res) => { 
  const { email, password } = req.body;

  // verification
  if (!email || !password)
    return res.json({ msg: "please enter all the credentials" });

  // does user exist
  const userExist = await user.findOne({ email });
  if (!userExist)
    return res.status(400).json({ msg: "user does not exist" });

  // password validation
  if (
    userExist.encry_password !=
    crypto.createHmac("sha256", userExist.salt).update(password).digest("hex")
  )
    return res.status(400).json({ msg: "Wrong password" });

  // creating token and setting cookie in the browser
  const token = jwt.sign({ email: userExist.email }, process.env.TOKENKEY);

  res.status(200)
    .cookie("token", token, {
      httpOnly: false,
    })
    .json({
      email: userExist.email,
      name: userExist.name,
      is_admin: userExist.is_admin,
      id: userExist._id,
      phone: userExist.phone,
    });
};

/*
method:GET
route:/api/auth/logout
description: logout the user
*/
const logoutUser = async (req, res) => {
  // clear the cookies in the browser
  res.status(200).clearCookie("token").json({
    msg: "Logout Successful",
  });
};

export { loginUser, logoutUser };
