// loading necessary modules
import train from "../models/trains.js";
import mongoose from 'mongoose';

/*
method: GET
route : api/train/:id
description: returns all the trains
*/
const getTrain = async (req, res) => {
  const { id } = req.params;
  if (!id) return res.status(400).json({ msg: "id not found" });
  if(mongoose.Types.ObjectId.isValid(id)){
  try{
      const traindetails = await train.findOne({_id: id});
      res.status(200).json(traindetails);
    }catch(err){
      res.status(400).json(err)
  }
  }else{
    res.status(400).json({msg:"Something went wrong"})
  }
};

/*
method: POST
route : api/train/
description: adds a new train
*/
const postTrain = async (req, res) => {
  const {
    name,
    destination,
    startpoint,
    startDate,
    reachDate,
    price,
  } = req.body;

  // validation
  if (
    !name ||
    !destination ||
    !startpoint ||
    !startDate ||
    !reachDate ||
    !price
  )
    return res.status(400).json({ msg: "enter all the credentials" });

  const duplicateCheck = await train.findOne({
    name,
  });

  if (duplicateCheck)
    return res.json({ msg: "train with same name already exists" });

  // add new train
  const newTrain = await new train({
    name,
    destination,
    startpoint,
    startDate,
    reachDate,
    price,
  });

  newTrain
    .save()
    .then((train) => {
      return res.status(200).json({
        name: train.name,
        users: train.populate("users").users,
        destination: train.destination,
        startpoint: train.startpoint,
        startDate: train.startDate,
        reachDate: train.reachDate,
        price: train.price,
      });
    })
    .catch((err) => console.log(err));
};

/*
method: GET
route : api/train/search
description: returns a single train based on id
*/
const getTrains = async (req, res) => {
  const { from,to,dateinp } = req.body;
  const date = new Date().toISOString().split("T")[0];
  const today = (date === dateinp)
  const date1 = new Date();
  const date2 = new Date(dateinp);
  const old = (date1 > date2);
  //validation
  if (!from || !to) return res.status(400).json({ msg: "Destination not found" });
  if (old) return res.status(400).json({ msg: "Destination not found" });

  const outTrain = await train.find({
      startpoint: from,destination:to
    });
  if (outTrain.length === 0) return res.status(401).json({ msg: "Train Does not exist" });
  if(today){
    const validTrains = outTrain.filter((train)=>new Date().getHours() < new Date(train.startDate).getHours())
    res.status(200).json(validTrains);
  }
  res.status(200).json(outTrain);
};

/*
method: DELETE
route: /api/train/
description: deletes a train based on id
*/
const deleteTrain = async (req, res) => {
  const { id } = req.body;

  // validation
  if (!id) return res.status(400).json({ msg: "id not found" });
  if(mongoose.Types.ObjectId.isValid(id)){
    const traindel = await train.findOne({
      _id: id,
    });
  
    if (!traindel) return res.json({ msg: "Id invalid" });
  
    await traindel
      .deleteOne()
      .then((train) =>
        res.json({
          train,
        })
      )
      .catch((err) => console.log(err));
  }else{
    return res.json({ msg: "Id invalid" });
  }
  
};

export  { getTrains, postTrain, getTrain, deleteTrain };
