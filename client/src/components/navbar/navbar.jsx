"use client";
import Link from "next/link";
import Image from "next/image";
import Links from "./links";
import Clock from "react-live-clock";
import { useEffect, useState } from "react";
import { motion, useScroll } from "framer-motion";
import { driver } from "driver.js";
import "driver.js/dist/driver.css";
import { usePathname } from "next/navigation";
import MenuIcon from "@mui/icons-material/Menu";
const Navbar = () => {
  const pathName = usePathname();
  const date = new Date();
  const [hydrated, setHydrated] = useState(false);
  const [width, setWidth] = useState(0);
  const [show, setShow] = useState(true);
  const { scrollYProgress } = useScroll();
  const startTour = () => {
    const config = {
      showButtons: ["next", "previous"],
      steps: [
        {
          element: "#element-of-mystery1",
          popover: {
            title: "Navigate",
            description: "You can navigate all features here.",
            side: "bottom",
            align: "center",
          },
        },
        {
          element: ".element-of-mystery2",
          popover: {
            title: "Excited?",
            description: "Strating point of your journey.",
            side: "bottom",
            align: "center",
          },
        },
        {
          element: ".element-of-mystery3",
          popover: {
            title: "Destination",
            description: "Your desitination.",
            side: "bottom",
            align: "center",
          },
        },
        {
          element: "#element-of-mystery4",
          popover: {
            title: "Hurray !",
            description: "Search your train here.",
            side: "right",
            align: "center",
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
      popoverClass: "driverjs-theme",
    };

    const tourInstance = driver(config);
    tourInstance.drive();
  };
  const handleWindowSizeChange = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    handleWindowSizeChange();
    window.addEventListener("resize", handleWindowSizeChange);
    width<768?setShow(false):setShow(true)
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, [width]);
  useEffect(() => {
    if (pathName === "/") {
      startTour()
    }
    setHydrated(true);
  }, []);
  return (
    <div
      className=" flex px-2 flex-col items-end bg-bg absolute  md:sticky top-0 z-50 glass"
      id="element-of-mystery1"
    >
      {show && (
        <div className=" md:flex w-[98vw] flex-col md:flex-row  ml-1 max-h-0 md:h-10 items-center justify-between py-10 px-10">
          <Link href="/">
            <Image
              className="ml-4 -mt-8 md:-mt-0 md:ml-0"
              src="/logo1.png"
              width={70}
              height={70}
              alt="Logo"
            />
          </Link>
          <div className="flex gap-8 items-center">
            <Links show={show} setShow={setShow} width={width}/>
            {hydrated && (
              <div className="font-bold hidden md:block glass text-blue-500 hover:rounded hover:border-2 hover:border-white p-2">
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
      )}
      <div
        className="h:5 w:8 md:hidden block font-bold text-2xl cursor-pointer fixed top-0 left-0 z-40"
        onClick={() => setShow(!show)}
      >
        <MenuIcon />
      </div>
      <motion.div
        className="progress-bar hidden md:block"
        style={{ scaleX: scrollYProgress }}
      />
    </div>
  );
};

export default Navbar;
