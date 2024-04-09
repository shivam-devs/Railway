import mongoose from "mongoose"

const TrainSchema = new mongoose.Schema({
  name: {
    trim: true,
    type: String,
    unique: true,
  },
  users: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
      required: false,
    },
  ],
  destination: {
    type: String,
    maxlength: 100,
  },
  startpoint: {
    type: String,
    maxlength: 100,
  },
  startDate: {
    type: Date,
  },
  reachDate: {
    type: Date,
  },
  price: {
    type: Number,
  },
});

const train = mongoose.model("train", TrainSchema);

export default train;
