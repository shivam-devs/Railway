'use client';
import React,{useEffect} from "react";
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
import  {motion}  from "framer-motion"
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
  return (
    <div className="exmp">
      <div className={styles.hero} >
        <div className={styles.container}>
          <div className={styles.top}>
            <Image src="/left.jpg" width={100} height={100} alt="left" />
            <h3>BOOK TICKET</h3>
            <Image src="/right.png" width={100} height={100} alt="right" />
          </div>
          <div className={styles.inputform}>
            <div className="flex justify-between px-3">
              <TextField id="outlined-basic" label="From" variant="outlined" className="element-of-mystery2"/>
              <input
                className="border-2 h-[3.5rem] w-[15rem]"
                type="date"
                defaultValue={defaultValue}
              />
            </div>
            <SwapVertIcon className="ml-10" />
            <div className="flex justify-between px-3">
              <TextField id="outlined-basic" label="To" variant="outlined" className="element-of-mystery3"/>
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
              >
                Search
              </Button>
              <Button
                variant="contained"
                className="w-[17rem] text-white bg-green-500"
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
          transition={{ type: "linear" ,duration: 0.7}}
          className="flex flex-col justify-center items-center gap-2 absolute top-20 right-8"
          id="element-of-mystery5"
        >
          <div className="text-5xl font-semibold">INDIAN RAILWAYS</div>
          <div className="flex justify-center gap-2 text-[1.5rem] font-semibold">
            Safty | <span className="text-blue-500 font-bold">Security</span> | Punctuality
          </div>
        </motion.div>
      </div>
      <motion.div
      variants={variants2}
      initial="hidden"
      whileInView="enter"
      transition={{ type: "linear" ,duration: 0.7}}
      className="flex flex-col justify-center items-center gap-9 py-5 target">
        <div className="flex flex-col justify-center items-center gap-3">
          <div className="text-white font-semibold text-4xl">
          <span className="text-blue-500 font-bold">Have</span> you not found the right one?
          </div>
          <div className="text-white text-4xl font-semibold">
            Find a <span className="text-blue-500 font-bold">service</span> suitable for you here.
          </div>
        </div>
        <motion.div
        variants={variants3}
        initial="hidden"
        whileInView="enter"
        transition={{ type: "linear" ,duration: 0.7}}
        className="flex flex-col justify-center items-center gap-5">
          <div className="flex gap-10">
            <div className="flex flex-col justify-center items-center gap-5">
              <div className="flex flex-col justify-center items-center icon">
                <FlightIcon className="text-5xl" />
              </div>
              <span className="font-semibold">FLIGHTS</span>
            </div>
            <div className="flex flex-col justify-center items-center gap-5">
              <div className="flex flex-col justify-center items-center icon">
                <HotelIcon className="text-5xl" />
              </div>
              <span className="font-semibold">HOTELS</span>
            </div>
            <div className="flex flex-col justify-center items-center gap-5">
              <div className="flex flex-col justify-center items-center icon">
                <ShowChartIcon className="text-5xl" />
              </div>
              <span className="font-semibold">RAIL DRISHTI</span>
            </div>

            <div className="flex flex-col justify-center items-center gap-5">
              <div className="flex flex-col justify-center items-center icon">
                <RamenDiningIcon className="text-5xl" />
              </div>
              <span className="font-semibold">E CATERING</span>
            </div>

            <div className="flex flex-col justify-center items-center gap-5">
              <div className="flex flex-col justify-center items-center icon">
                <DirectionsBusIcon className="text-5xl" />
              </div>
              <span className="font-semibold">BUS</span>
            </div>
          </div>
          <div className="flex gap-10">
            <div className="flex flex-col justify-center items-center gap-5">
              <div className="flex flex-col justify-center items-center icon">
                <BeachAccessIcon className="text-5xl" />
              </div>
              <span className="font-semibold">HOLIDAY PACKAGES</span>
            </div>

            <div className="flex flex-col justify-center items-center gap-5">
              <div className="flex flex-col justify-center items-center icon">
                <DirectionsTransitIcon className="text-5xl" />
              </div>
              <span className="font-semibold">TOURIST TRAIN</span>
            </div>

            <div className="flex flex-col justify-center items-center gap-5">
              <div className="flex flex-col justify-center items-center icon">
                <HikingIcon className="text-5xl" />
              </div>
              <span className="font-semibold">HILL RAILWAYS</span>
            </div>

            <div className="flex flex-col justify-center items-center gap-5">
              <div className="flex flex-col justify-center items-center icon">
                <RailwayAlertIcon className="text-5xl" />
              </div>
              <span className="font-semibold">CHARTER TRAIN</span>
            </div>

            <div className="flex flex-col justify-center items-center gap-5">
              <div className="flex flex-col justify-center items-center icon">
                <CollectionsIcon className="text-5xl" />
              </div>
              <span className="font-semibold">GALLERY</span>
            </div>
          </div>
        </motion.div>
      </motion.div>
      <div className={styles.holiday}>
        <div className="text-white text-6xl">HOLIDAYS</div>
        <Holiday />
      </div>
    </div>
  );
};

export default Main;
