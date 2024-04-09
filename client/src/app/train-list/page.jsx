'use client'
import { useStateProvider } from '@/context/StateContext';
import React from 'react'
import EastIcon from '@mui/icons-material/East';
import TrainInfolist from '@/components/train-Info/trainInfolist' 
const TrainList = () => {
  const [{trainInfo}, dispatch] = useStateProvider();
  return (
    <div className='min-h-[20rem] w-full gap-5 mb-[10rem] md:mb-[5rem] flex'>
      <div className='left w-[4rem] md:w-[10rem] flex justify-center border-r-2 border-gray-800'><span>Ads</span></div>
      <div className='right growflex w-full justify-center p-3 md:justify-start'>
        <div className='font-bold text-sm md:text-2xl'>{`${trainInfo.length} Results for ${trainInfo.length === 0?"":trainInfo[0].startpoint}`} <EastIcon /> {`${trainInfo.length===0?"":trainInfo[0].destination}`}</div>
        {trainInfo && <div className='flex flex-col gap-3 p-2 w-full'>{
          trainInfo.map((train)=><div key={train.name}><TrainInfolist train={train}/></div>)
          }</div>}
      </div>
    </div>
  )
}

export default TrainList