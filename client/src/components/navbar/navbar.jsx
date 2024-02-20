"use client";
import Link from "next/link";
import Image from "next/image";
import Links from "./links";
import Clock from "react-live-clock";
import { useEffect, useState } from "react";
import { motion, useScroll } from "framer-motion"
import { driver } from "driver.js";
import "driver.js/dist/driver.css";
import { usePathname } from "next/navigation";
const Navbar = () => {
  const pathName = usePathname();
  const date = new Date();
  const [hydrated, setHydrated] = useState(false);
  const { scrollYProgress } = useScroll();
  const startTour = () => {
    const config = {
      showButtons: [
        'next',
        'previous',
      ],
    steps: [
    {
    element: "#element-of-mystery1",
    popover: {
    title: "Navigate",
    description: "You can navigate all features here.",
    side: "bottom", align: 'center'
    },
    },
    {
      element: ".element-of-mystery2",
      popover: {
      title: "Excited?",
      description: "Strating point of your journey.",
      side: "bottom", align: 'center'
      },
      },
    {
      element: ".element-of-mystery3",
      popover: {
      title: "Destination",
      description: "Your desitination.",
      side: "bottom", align: 'center'
      },
      },
    {
      element: "#element-of-mystery4",
      popover: {
      title: "Hurray !",
      description: "Search your train here.",
      side: "right", align: 'center'
      },
      },
    {
      element: "#element-of-mystery5",
      popover: {
      title: "Trust",
      description: "Trust us.",
      },
      },
    ],
    allowClose: true,
    popoverClass: 'driverjs-theme',
    };
    
    const tourInstance = driver(config);
    tourInstance.drive();
    
    };
    useEffect(() => {
      if(pathName === "/"){
        startTour();
      }
      setHydrated(true);
      }, []);
  return (
    <div className=" flex flex-col bg-bg sticky top-0 z-50 glass" id="element-of-mystery1">
      <div className="flex w-[98vw]  ml-1 h-10 items-center justify-between py-10 px-10">
      <Link href="/">
        <Image src="/logo1.png" width={70} height={70} alt="Logo"  />
      </Link>
      <div className="flex gap-8 items-center">
        <Links />
        {hydrated && (
          <div className="font-bold text-blue-500 hover:rounded hover:border-2 hover:border-white p-2">
            {date.toLocaleDateString()}
            {" ["}
            <Clock format={"h:mm:ssa"} ticking={true} />
            {"]"}
          </div>
        )}
      </div>
      <Link href="/">
        <Image src="/logo2.png" width={80} height={80} alt="Logo" />
      </Link>
    </div>
    <motion.div className="progress-bar" style={{ scaleX: scrollYProgress }} />
    </div>
  );
};

export default Navbar;
