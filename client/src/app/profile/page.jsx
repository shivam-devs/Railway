'use client'
import { getTickets } from '@/utils/Apis';
import React,{useEffect, useState} from 'react'
import Image from "next/image"
import { useStateProvider } from '@/context/StateContext';
import Ticketlist from '@/components/Tickets/ticketList';
import { useRouter } from 'next/navigation';
const profile = () => {
  const [{ userInfo },dispatch] = useStateProvider();
  const [trains,setTrains] = useState([]);
  const router = useRouter();
  useEffect(()=>{
    if(!userInfo) router.push('/');
    else{
      const fetchTicket = async() =>{
        const response = await getTickets(userInfo?.id);
        setTrains(response.data);
      }
      fetchTicket();
    }
  },[])
  return (
    <div className='flex gap-4 flex-col w-full items-center mb-[10rem] rounded md:mb-[5rem]'>
      <div className='flex flex-col md:h-[20rem] min-h-[30vh] md:w-[30rem] w-[60vw] bg-gray-800'>
        <div className='min-h-[40%] bg-black w-full flex justify-center items-center py-1'>
          <Image src="/logo2.png" width={100} height={100} alt='logo'/>
        </div>
        <div className='min-h-[1rem]'><span className='text-blue-500 font-bold text-xs md:text-lg ml-2'>Profile Details</span></div>
        <div className='h-[60%] w-full flex flex-col gap-3 p-2'>
          <div className='h-[3rem] w-[60%]'><span className='text-blue-200'>Name : </span><span>{userInfo?.name}</span></div>
          <div className='h-[3rem] w-[60%]'><span className='text-blue-200'>E-mail : </span><span>{userInfo?.email}</span></div>
          <div className='h-[3rem] w-[60%]'><span className='text-blue-200'>Phone : </span><span>{userInfo?.phone}</span></div>
        </div>
      </div>
      <div className='flex flex-col md:min-h-[20rem] min-h-[30vh] md:w-[30rem] w-[60vw] bg-gray-800'>
        <div className='h-[40%] bg-black w-full flex justify-center items-center py-2'>
          <Image src="/logo1.png" width={100} height={100} alt='logo'/>
        </div>
        <div className='h-[60%] w-full flex flex-col p-2'>
          <div className='min-h-[1rem]'><span className='text-blue-500 font-bold text-xs md:text-lg'>Booked Ticket</span></div>
          {trains?.map((train)=>(<div key={train.order_id}><Ticketlist data={{train:train?.train,order_id:train?.order_id,payment:train?.payment}} /></div>))}
        </div>
      </div>
    </div>
  )
}

export default profile