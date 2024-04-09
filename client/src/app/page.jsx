'use client'
import Main from "@/components/home/home";
import { useStateProvider } from "@/context/StateContext";
import { reducerCases } from "@/context/constants";
import { getuserInfo } from "@/utils/Apis";
import { useEffect, useState } from "react";
export default function Home() {
  const[info,setInfo] = useState({});
  const [{userInfo}, dispatch] = useStateProvider();
  async function getData (){
    const {data} = await getuserInfo();
    setInfo(data);
  }
  useEffect(()=>{
    if(userInfo?.id==undefined){
      getData();
      dispatch({
        type: reducerCases.SET_USER_INFO,
        userInfo: {
          id:info.id,
          email:info.email,
          name:info.name,
          is_admin:info.is_admin,
          phone:info.phone
        },
      });
    }
  },[info])
  return (
      <Main />
  );
}
