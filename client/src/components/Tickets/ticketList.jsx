import { getTrain } from '@/utils/Apis'
import { Button } from '@mui/material'
import React, { useEffect, useState } from 'react'

const Ticketlist = ({data:{train,order_id,payment}}) => {
    const [trainInfo,setTrainInfo] = useState([]);
    const startTime = new Date(trainInfo?.startDate);
    const endTime = new Date(trainInfo?.reachDate);
    useEffect(()=>{
        const fethdata = async() =>{
            const response = await getTrain(train)
            setTrainInfo(response.data)
        }
        fethdata();
    },[])
    const handelClick = (order_id) =>{

    }
  return (
    <div key={train.name} className="min-h-[8rem] border bg-blue-800 border-gray-900 shadow-md shadow-gray-400 w-full flex flex-col gap-1 p-2 my-2">
      <div className="flex flex-col gap-2">
        <span className="text-blue-200 font-bold md:text-lg text-sm">
          {trainInfo.name}
        </span>
        <span className='flex items-center text-[0.7rem] md:text-sm'><span>Ticket Id : </span><span className="font-bold text-[0.6rem] md:text-lg p-1 flex justify-start items-center">{order_id}</span></span>
      </div>
      <div className="flex flex-col md:flex-row items-center md:justify-between w-auto">
        <span className="font-semibold text-xs md:text-lg md:w-[25%]">{startTime.toLocaleTimeString()}</span>
        <span className="font-semibold text-xs md:text-lg md:w-auto">{`------ ${endTime.getHours()-startTime.getHours()}:${endTime.getMinutes()-startTime.getMinutes()} ------ `}</span>
        <span className="font-semibold text-xs md:text-lg md:w-[25%] text-right">{endTime.toLocaleTimeString()}</span>
      </div>
      <div className='text-xs '>payment status : <span className={payment?"text-green-500 font-bold text-sm p-1":"text-red-500 font-bold text-sm p-1"}>{payment?`Success`:`Pending`}</span></div>
      <span className="text-lg font-semibold">₹{trainInfo.price}</span>
      <Button
        variant="contained"
        className="md:w-[8rem] md:h-[2rem] w-[7rem] h-[1.5rem] text-xs md:text-sm text-white bg-red-600"
        onClick={()=>handelClick(order_id)}
      >
        Cancel
      </Button>
    </div>
  )
}

export default Ticketlist