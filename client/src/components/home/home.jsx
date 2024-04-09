"use client";
import React, { useState } from "react";
import styles from "./home.module.css";
import Image from "next/image";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import Checkbox from "@mui/material/Checkbox";
import SwapVertIcon from "@mui/icons-material/SwapVert";
import Button from "@mui/material/Button";
import SearchIcon from "@mui/icons-material/Search";
import FlightIcon from "@mui/icons-material/Flight";
import HotelIcon from "@mui/icons-material/Hotel";
import ShowChartIcon from "@mui/icons-material/ShowChart";
import RamenDiningIcon from "@mui/icons-material/RamenDining";
import DirectionsBusIcon from "@mui/icons-material/DirectionsBus";
import BeachAccessIcon from "@mui/icons-material/BeachAccess";
import DirectionsTransitIcon from "@mui/icons-material/DirectionsTransit";
import HikingIcon from "@mui/icons-material/Hiking";
import RailwayAlertIcon from "@mui/icons-material/RailwayAlert";
import CollectionsIcon from "@mui/icons-material/Collections";
import Holiday from "../holidays/holiday";
import { motion } from "framer-motion";
import { searchTrain } from "@/utils/Apis";
import { reducerCases } from "@/context/constants";
import { useStateProvider } from "@/context/StateContext";
import { useRouter } from "next/navigation";
import { CircularProgress } from "@mui/material";
const Main = () => {
  const variants = {
    hidden: { opacity: 0, x: -200, y: 0 },
    enter: { opacity: 1, x: 0, y: 0 },
  };
  const variants2 = {
    hidden: { opacity: 0, x: -200, y: -100 },
    enter: { opacity: 1, x: 0, y: 0 },
  };
  const variants3 = {
    hidden: { opacity: 0, x: -200, y: 100 },
    enter: { opacity: 1, x: 0, y: 0 },
  };
  const classes = [
    "All Classes",
    "First Class (FC)",
    "AC 3 Tier (3A)",
    "Sleeper (SL)",
    "Second Sitting (2S)",
  ];
  const quota = [
    "GENERAL",
    "LADIES",
    "LOWER BERTH/SR.CITIZEN",
    "PERSON WITH DISABILITY",
    "DUTY PASS",
  ];
  const today = new Date();
  const date = today.setDate(today.getDate());
  const defaultValue = new Date(date).toISOString().split("T")[0];

  const [{userInfo}, dispatch] = useStateProvider();
  const router = useRouter();
  const [from,setFrom] = useState("");
  const [to,setTo] = useState("");
  const [dateinp,setDateinp] = useState(defaultValue);
  const [spin,setSpin] = useState(false);
  const handelClick = async() =>{
    const data = await searchTrain({from:from.toUpperCase(),to:to.toUpperCase(),dateinp:dateinp});
    console.log(dateinp);
    setSpin(true);
    if(data.status === 200){
      const trains = data.data;
          dispatch({
            type: reducerCases.SET_TRAIN_INFO,
            trainInfo: trains,
          });
          setTimeout(() => {
            router.push('/train-list');
          }, 2000);
    }else{
      setSpin(false);
      console.log(data.response?.data.msg)
    }
  }
  return (
    <div className="exmp">
      <div className={styles.hero}>
        <div className={styles.container}>
          <div className={styles.top}>
            <Image src="/left.jpg" width={100} height={100} alt="left" />
            <h3>BOOK TICKET</h3>
            <Image src="/right.png" width={100} height={100} alt="right" />
          </div>
          <div className={styles.inputform}>
            <div className="flex justify-between px-3">
              <TextField
                id="outlined-basic"
                label="From"
                variant="outlined"
                className="element-of-mystery2"
                value={from}
                onChange={(e)=>setFrom(e.target.value)}
              />
              <input
                className="border-2 h-[3.5rem] w-[15rem]"
                type="date"
                defaultValue={defaultValue}
                onChange={(e)=>setDateinp(e.target.value)}
              />
            </div>
            <SwapVertIcon className="ml-10" />
            <div className="flex justify-between px-3">
              <TextField
                id="outlined-basic"
                label="To"
                variant="outlined"
                className="element-of-mystery3"
                value={to}
                onChange={(e)=>setTo(e.target.value)}
              />
              <TextField
                id="filled-select-currency"
                select
                label="Select"
                defaultValue="All Classes"
                variant="filled"
                className="w-[15rem]"
              >
                {classes.map((option) => (
                  <MenuItem key={option} value={option}>
                    {option}
                  </MenuItem>
                ))}
              </TextField>
            </div>
            <TextField
              id="filled-select-currency"
              select
              label="Select"
              defaultValue="GENERAL"
              variant="filled"
              className="w-[15rem]"
            >
              {quota.map((option) => (
                <MenuItem key={option} value={option}>
                  {option}
                </MenuItem>
              ))}
            </TextField>
            <div className="checks flex flex-col text-sm font-bold">
              <div className="flex">
                <div>
                  <Checkbox size="small" id="pwd" />
                  <label htmlFor="pwd">Person With Disability Concession</label>
                </div>
                <div>
                  <Checkbox size="small" id="flext" />
                  <label htmlFor="flext">Flexible With Date</label>
                </div>
              </div>
              <div className="flex">
                <div>
                  <Checkbox size="small" id="berth" />
                  <label htmlFor="berth">Train With Available Berth</label>
                </div>
                <div>
                  <Checkbox size="small" id="pass" />
                  <label htmlFor="pass">Railway Pass Concession</label>
                </div>
              </div>
            </div>
            <div className="flex justify-between h-10">
              <Button
                variant="contained"
                startIcon={<SearchIcon />}
                className="w-[7rem] text-white bg-orange-500"
                id="element-of-mystery4"
                onClick={handelClick}
              >
                {spin?<CircularProgress style={{height:"1.5rem",width:"1.5rem",color:"#fff"}}/>:<span>Search</span>}
              </Button>
              <Button
                variant="contained"
                className="w-[17rem] hidden md:block text-white bg-green-500"
              >
                Try booking in Ask DISHA 2.0
              </Button>
            </div>
          </div>
        </div>
        <motion.div
          variants={variants}
          initial="hidden"
          whileInView="enter"
          transition={{ type: "linear", duration: 0.7 }}
          className="md:flex hidden flex-col justify-center items-center gap-2 absolute top-20 right-8"
          id="element-of-mystery5"
        >
          <div className="text-5xl font-semibold">INDIAN RAILWAYS</div>
          <div className="flex justify-center gap-2 text-[1.5rem] font-semibold">
            Safty | <span className="text-blue-500 font-bold">Security</span> |
            Punctuality
          </div>
        </motion.div>
      </div>
      <motion.div
        variants={variants2}
        initial="hidden"
        whileInView="enter"
        transition={{ type: "linear", duration: 0.7 }}
        className="flex flex-col justify-center items-center gap-9 py-5 target"
      >
        <div className="flex flex-col justify-center items-center gap-3">
          <div className="text-white text-md font-semibold md:text-4xl">
            <span className="text-blue-500 font-bold">Have</span> you not found
            the right one?
          </div>
          <div className="text-white text-md md:text-4xl font-semibold">
            Find a <span className="text-blue-500 font-bold">service</span>{" "}
            suitable for you here.
          </div>
        </div>
        <motion.div
          variants={variants3}
          initial="hidden"
          whileInView="enter"
          transition={{ type: "linear", duration: 0.7 }}
          className="flex flex-col justify-center items-center gap-5"
        >
          <div className="flex gap-5 justify-center md:gap-10 md:w-auto w-[95vw]">
            <div className="flex flex-col justify-center items-center gap-5">
              <div className="flex flex-col justify-center items-center icon">
                <FlightIcon className="md:text-5xl text-md" />
              </div>
              <span className="font-semibold text-xs md:text-lg text-[0.5rem]">FLIGHTS</span>
            </div>
            <div className="flex flex-col justify-center items-center gap-5">
              <div className="flex flex-col justify-center items-center icon">
                <HotelIcon className="md:text-5xl text-md" />
              </div>
              <span className="font-semibold text-xs md:text-lg text-[0.5rem]">HOTELS</span>
            </div>
            <div className="flex flex-col justify-center items-center gap-5">
              <div className="flex flex-col justify-center items-center icon">
                <ShowChartIcon className="md:text-5xl text-md" />
              </div>
              <span className="font-semibold text-xs md:text-lg text-[0.5rem]">DRISHTI</span>
            </div>

            <div className="flex flex-col justify-center items-center gap-5">
              <div className="flex flex-col justify-center items-center icon">
                <RamenDiningIcon className="md:text-5xl text-md" />
              </div>
              <span className="font-semibold text-xs md:text-lg text-[0.5rem]">CATERING</span>
            </div>

            <div className="flex flex-col justify-center items-center gap-5">
              <div className="flex flex-col justify-center items-center icon">
                <DirectionsBusIcon className="md:text-5xl text-md" />
              </div>
              <span className="font-semibold text-xs md:text-lg text-[0.5rem]">BUS</span>
            </div>
          </div>
          <div className="flex justify-center gap-5 md:gap-10 md:w-auto w-[95vw]">
            <div className="flex flex-col justify-center items-center gap-5">
              <div className="flex flex-col justify-center items-center icon">
                <BeachAccessIcon className="md:text-5xl text-md" />
              </div>
              <span className="font-semibold text-[0.5rem] md:text-lg text-center">HOLIDAY PACKAGES</span>
            </div>

            <div className="flex flex-col justify-center items-center gap-5">
              <div className="flex flex-col justify-center items-center icon">
                <DirectionsTransitIcon className="md:text-5xl text-md" />
              </div>
              <span className="font-semibold text-[0.5rem] md:text-lg text-center">TOURIST TRAIN</span>
            </div>

            <div className="flex flex-col justify-center items-center gap-5">
              <div className="flex flex-col justify-center items-center icon">
                <HikingIcon className="md:text-5xl text-md" />
              </div>
              <span className="font-semibold text-[0.5rem] md:text-lg text-center">HILL RAILWAYS</span>
            </div>

            <div className="flex flex-col justify-center items-center gap-5">
              <div className="flex flex-col justify-center items-center icon">
                <RailwayAlertIcon className="md:text-5xl text-md" />
              </div>
              <span className="font-semibold text-[0.5rem] md:text-lg text-center">CHARTER TRAIN</span>
            </div>

            <div className="flex flex-col justify-center items-center gap-5">
              <div className="flex flex-col justify-center items-center icon">
                <CollectionsIcon className="md:text-5xl text-md" />
              </div>
              <span className="font-semibold text-[0.5rem] md:text-lg text-center">GALLERY</span>
            </div>
          </div>
        </motion.div>
      </motion.div>
      <div className={`${styles.holiday}`}>
        <div className="text-white text-6xl">HOLIDAYS</div>
        <Holiday />
      </div>
    </div>
  );
};

export default Main;
