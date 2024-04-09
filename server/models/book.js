import mongoose from "mongoose"

const bookSchema = new mongoose.Schema({
  train: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "train",
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },
  order_id:{
    type: String,
    require:true
  },
  payment:{
    type: Boolean,
    default:false,
    required:true
  },
  created_at:{
    type: Date,
    default: Date.now
  }
});

const book = mongoose.model("book", bookSchema);
export default book;
