import book from "../models/book.js";
import user from "../models/user.js";
import train from "../models/trains.js";
import mongoose from "mongoose";

/*
method: GET
route: /api/book/
description: gets all bookings
*/
const getBooks = (req, res) => {
  book
    .find()
    .sort({ startDate: -1 })
    .then((books) => {
      res.json({
        books,
      });
    })
    .catch((err) => console.log(err));
};

/*
method: DELETE
route: /api/book/:id
description: deletes a booking
*/
const deleteBook = async (req, res) => {
  const { id } = req.params;

  const bookExist = await book.findOne({ _id: id });

  if (!bookExist) return res.json({ msg: "Book does not exist" });

  // getting the train id and user id
  const user_id = bookExist.user;
  const train_id = bookExist.train;

  trainExist = await train.findOne({ _id: train_id });
  let usersOfTrain = [...trainExist.users];

  usersOfTrain = usersOfTrain.filter((user) => {
    return String(user_id) != String(user);
  });

  //removing element from train
  trainExist
    .updateOne({
      users: usersOfTrain,
    })
    .catch((err) => res.json({ err }));

  // deleting the booking
  await bookExist
    .deleteOne()
    .then((book) => {
      res.json({
        book,
      });
    })
    .catch((err) => res.json({ err }));
};

/*
method: GET
route: /api/book/:id
description: gets a single booking
*/
const getBook = async (req, res) => {
  const { id } = req.params;
  if (mongoose.Types.ObjectId.isValid(id)) {
    const bookExist = await book.find({ user : id }).sort({created_at: -1});

    if (!bookExist) return res.json({ msg: "Booking does not exist" });

    res.status(200).json(bookExist);
  } else {
    res.status(400).json({ msg: "Booking does not exist" });
    return;
  }
};

export { getBooks, deleteBook, getBook };
