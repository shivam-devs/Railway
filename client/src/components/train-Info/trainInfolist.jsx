import React from "react";
import Button from "@mui/material/Button";
import axios from "axios";
import { useStateProvider } from "@/context/StateContext";
const TrainInfolist = ({ train }) => {
  const [{userInfo}] = useStateProvider();
  const startTime = new Date(train?.startDate);
  const endTime = new Date(train?.reachDate);
  const handelClick = async (train_id, user_id, amount) => {
    try{
      const { data: { order } } = await axios.post("http://localhost:8000/api/payment/checkout", {
         train_id, user_id, amount
        })
    console.log(order)
    const options = {
      key:'rzp_test_Ll3DMUxqVBUyp8',
      amount: amount,
      currency: "INR",
      name: "Railway Reservation System",
      description: "VSSUT",
      image: "https://avatars.githubusercontent.com/u/25058652?v=4",
      order_id: order.id,
      callback_url: "http://localhost:8000/api/payment/paymentverification",
      prefill: {
          name: "Shivam",
          email: "shivam@gmail.com",
          contact: "7758963251"
      },
      notes: {
          "address": "Razorpay Corporate Office"
      },
      theme: {
          "color": "#121212"
      }
  };
  const razor = new window.Razorpay(options);
  razor.open();
    }catch(error){
      alert("Please login to book tickets !")
    }
}
  return (
    <div key={train.name} className="min-h-[8rem] border bg-blue-800 border-gray-900 shadow-md shadow-gray-400 w-full flex flex-col gap-2 px-5 py-2">
      <div className="flex justify-between">
        <span className="text-blue-200 font-bold md:text-lg text-sm">
          {train.name}
        </span>
        <span className="font-semibold md:text-sm text-xs">
          {" "}
          Runs On: S M T W T F S{" "}
        </span>
        <span className="text-blue-100 md:text-sm cursor-pointer hidden md:block text-xs">
          Train Schedule
        </span>
      </div>
      <div className="flex justify-between w-full">
        <span className="font-semibold text-xs md:text-lg w-[20%]">{startTime.toLocaleTimeString()}</span>
        <span className="font-semibold text-xs md:text-lg w-auto">{`-------- ${endTime.getHours()-startTime.getHours()}:${endTime.getMinutes()-startTime.getMinutes()} -------- `}</span>
        <span className="font-semibold text-xs md:text-lg w-[20%] text-right">{endTime.toLocaleTimeString()}</span>
      </div>
      <span className="text-lg font-semibold">₹{train.price}</span>
      <Button
        variant="contained"
        className="md:w-[8rem] md:h-[2rem] w-[8rem] h-[2rem] text-white bg-orange-500"
        onClick={()=>handelClick(train?._id, userInfo?.id, train?.price-0)}
      >
        Book Now
      </Button>
    </div>
  );
};

export default TrainInfolist;
