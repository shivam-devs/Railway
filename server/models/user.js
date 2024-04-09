import mongoose from "mongoose"

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
    maxlength: 50,
  },
  email: {
    type: String,
    maxlength: 100,
    unique: true,
  },
  encry_password: {
    type: String,
  },
  phone: {
    type: String,
    trim: true,
    unique: true,
  },
  salt: {
    type: String,
  },
  is_admin: {
    type: Boolean,
  },
});

const user = mongoose.model("user", userSchema);
export default user;
