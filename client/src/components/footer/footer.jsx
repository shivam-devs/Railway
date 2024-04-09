"use client";
import React, { useState } from "react";
import styles from "./footer.module.css";
import Image from "next/image";
import FacebookSharpIcon from "@mui/icons-material/FacebookSharp";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TelegramIcon from "@mui/icons-material/Telegram";
import PinterestIcon from "@mui/icons-material/Pinterest";
import TwitterIcon from "@mui/icons-material/Twitter";
import Link from "next/link";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
const Footer = () => {
  const [age] = useState(" ");
  return (
    <div className="md:w-full flex flex-col h-[25rem]  w-[100vw] justify-center ml-2">
      <div className={styles.ftop}>
        <span className="md:ml-[10rem]">
          Get Connected with us on social networks
        </span>
        <div className="flex w-[50%] gap-3">
          <div className={`${styles.social} bg-blue-700`}>
            <Link href="">
              <FacebookSharpIcon className="text-white text-[1.8rem]" />
            </Link>
          </div>
          <div className={`${styles.social} bg-red-600`}>
            <Link href="">
              <YouTubeIcon className="text-white" />
            </Link>
          </div>
          <div className={`${styles.social} bg-blue-900`}>
            <Link href="">
              <InstagramIcon className="text-white" />
            </Link>
          </div>
          <div className={`${styles.social} bg-blue-600`}>
            <Link href="">
              <LinkedInIcon className="text-white" />
            </Link>
          </div>
          <div className={`${styles.social} bg-blue-400`}>
            <Link href="">
              <TelegramIcon className="text-white" />
            </Link>
          </div>
          <div className={`${styles.social} bg-red-700`}>
            <Link href="">
              <PinterestIcon className="text-white" />
            </Link>
          </div>
          <div className={`${styles.social} ${styles.mobo} bg-gray-700`}>
            <Link href="">
              <Image src="/tumblr.ico" width={20} height={20} alt="kooapp" />
            </Link>
          </div>
          <div className={`${styles.social} ${styles.mobo} bg-white`}>
            <Link href="">
              <Image src="/koo-icon.webp" width={30} height={30} alt="tumblr" />
            </Link>
          </div>
          <div className={`${styles.social} bg-blue-400`}>
            <Link href="">
              <TwitterIcon className="text-white" />
            </Link>
          </div>
        </div>
      </div>
      <div className={styles.fmid}>
        <div className="flex flex-col gap-3 justify-center items-center w-full py-5">
          <Select
            className="text-white"
            value={age}
            displayEmpty
            inputProps={{ "aria-label": "Without label" }}
          >
            <MenuItem value="">
              <em>Trains</em>
            </MenuItem>
            <MenuItem>Salient Features</MenuItem>
            <MenuItem>Ticket Cancellation Rules</MenuItem>
            <MenuItem>Foreign Tourist T&C</MenuItem>
            <MenuItem>Group Booking T&C</MenuItem>
            <MenuItem>Travel Insurance Claim Process</MenuItem>
          </Select>
          <Select
            className="text-white"
            value={age}
            displayEmpty
            inputProps={{ "aria-label": "Without label" }}
          >
            <MenuItem value="">
              <em>General Infoprmation</em>
            </MenuItem>
            <MenuItem>More info</MenuItem>
            <MenuItem>FAQs</MenuItem>
            <MenuItem>Terms & Conditions</MenuItem>
            <MenuItem>Travel Insurance T&C</MenuItem>
            <MenuItem>FTR T&C</MenuItem>
            <MenuItem>Scheme for issue of waitlisted E-tickets</MenuItem>
            <MenuItem>Protect against fraudulent emails</MenuItem>
            <MenuItem>General Guideline for SUVIDHA trains</MenuItem>
            <MenuItem>Current booking Guidelines</MenuItem>
            <MenuItem>Forgo Senior Citizen Concession-FAQ</MenuItem>
            <MenuItem>Trains at a Glance</MenuItem>
            <MenuItem>Guidelines for Boarding Station change</MenuItem>
            <MenuItem>Guideline for PASS Booking</MenuItem>
          </Select>
          <Select
            className="text-white"
            value={age}
            displayEmpty
            inputProps={{ "aria-label": "Without label" }}
          >
            <MenuItem value="">
              <em>Important Information</em>
            </MenuItem>
            <MenuItem>Bank Transaction Charges</MenuItem>
            <MenuItem>Women Sr. Citizen Concession</MenuItem>
            <MenuItem>VIKALP Scheme</MenuItem>
            <MenuItem>Travel Insurance (Incl. of GST)</MenuItem>
            <MenuItem>Browser Settings</MenuItem>
          </Select>
          <Select
            className="text-white"
            value={age}
            displayEmpty
            inputProps={{ "aria-label": "Without label" }}
          >
            <MenuItem value="">
              <em>Agents</em>
            </MenuItem>
            <MenuItem>IRCTC Authorized Service Providers</MenuItem>
            <MenuItem>Digital Certificate Generation Process</MenuItem>
            <MenuItem>Blacklist Agent</MenuItem>
            <MenuItem>Find NgeT Agents</MenuItem>
            <MenuItem>Rules and Regulations for the Agents</MenuItem>
            <MenuItem>Norms for RTSA</MenuItem>
            <MenuItem>Norms for IATA</MenuItem>
            <MenuItem>Norms for GSA</MenuItem>
            <MenuItem>Norms for Internet Cafe Scheme</MenuItem>
            <MenuItem>Norms for B2B Scheme</MenuItem>
            <MenuItem>Norms for B2C & Mobile Scheme</MenuItem>
            <MenuItem>Registration Form</MenuItem>
            <MenuItem>Requisition Slip</MenuItem>
          </Select>
          <Select
            className="text-white"
            value={age}
            displayEmpty
            inputProps={{ "aria-label": "Without label" }}
          >
            <MenuItem value="">
              <em>Enquiries</em>
            </MenuItem>
            <MenuItem>Reservation Enquiries</MenuItem>
            <MenuItem>PNR Enquiry</MenuItem>
            <MenuItem>Train Enquiry</MenuItem>
            <MenuItem>Train/Fare Accommodation</MenuItem>
            <MenuItem>Train Between Important Stations</MenuItem>
            <MenuItem>Railway Enquiry-139</MenuItem>
          </Select>
        </div>
        <div className="flex flex-col gap-3 justify-center items-center w-full py-5">
          <Select
            className="text-white"
            value={age}
            displayEmpty
            inputProps={{ "aria-label": "Without label" }}
          >
            <MenuItem value="">
              <em>How To</em>
            </MenuItem>
            <MenuItem>Register</MenuItem>
            <MenuItem>Book E-ticket (PDF) (VIDEO)</MenuItem>
            <MenuItem>Book tatkal ticket</MenuItem>
            <MenuItem>
              Book Concession Tickets for Person With Disability
            </MenuItem>
            <MenuItem>Cancel E-ticket</MenuItem>
            <MenuItem>International/NRI User Registration Guide</MenuItem>
            <MenuItem>Change Boarding Point</MenuItem>
            <MenuItem>Link Your Aadhaar</MenuItem>
            <MenuItem>File TDR</MenuItem>
          </Select>
          <Select
            className="text-white"
            value={age}
            displayEmpty
            inputProps={{ "aria-label": "Without label" }}
          >
            <MenuItem value="">
              <em>IRCTC Official App</em>
            </MenuItem>
            <MenuItem>IRCTC Rail Connect (Android)</MenuItem>
            <MenuItem>IRCTC Rail Connect (iOS)</MenuItem>
            <MenuItem>IRCTC Order Food (Android)</MenuItem>
            <MenuItem>IRCTC Order Food (IOS)</MenuItem>
            <MenuItem>IRCTC Tourism App</MenuItem>
            <MenuItem>IRCTC Air App (Android)</MenuItem>
            <MenuItem>IRCTC Air App (IOS)</MenuItem>
            <MenuItem>IRCTC iMudra (Android)</MenuItem>
          </Select>
          <Select
            className="text-white"
            value={age}
            displayEmpty
            inputProps={{ "aria-label": "Without label" }}
          >
            <MenuItem value="">
              <em>Advertise With Us</em>
            </MenuItem>
            <MenuItem>IRCTC Marketing Statistics</MenuItem>
            <MenuItem>Banner-Advertisement</MenuItem>
            <MenuItem>Banner Locations on IRCTC</MenuItem>
            <MenuItem>Push Notification</MenuItem>
            <MenuItem>Chat Bot Advertisement</MenuItem>
            <MenuItem>Chat Bot : As a IRCTC Service</MenuItem>
            <MenuItem>Cuboid Advertisement</MenuItem>
            <MenuItem>e-Ticket(ERS) Advertisement</MenuItem>
            <MenuItem>Logout Advertisement</MenuItem>
          </Select>
          <Select
            className="text-white"
            value={age}
            displayEmpty
            inputProps={{ "aria-label": "Without label" }}
          >
            <MenuItem value="">
              <em>Refund Rules</em>
            </MenuItem>
            <MenuItem>Ticket Cancellation & Refund Rules</MenuItem>
            <MenuItem>
              Gazette: Cancellation of Ticket and Refund Rules 2015
            </MenuItem>
            <MenuItem>Refund Rule of Suvidha Train</MenuItem>
            <MenuItem>Refund Rule COVID19 - RB </MenuItem>
            <MenuItem>13.05.2020</MenuItem>
          </Select>
          <Select
            className="text-white"
            value={age}
            displayEmpty
            inputProps={{ "aria-label": "Without label" }}
          >
            <MenuItem value="">
              <em>Person With Disability Facilities</em>
            </MenuItem>
            <MenuItem></MenuItem>Facilities for Person With Disability Users
            <MenuItem></MenuItem>Facilities for Visually Impaired Users
            <MenuItem>User</MenuItem>
            <MenuItem></MenuItem> Guide: Person With Disability Booking
          </Select>
        </div>
        <div className="flex flex-col gap-3 justify-center items-center w-full py-5">
          <Select
            className="text-white"
            value={age}
            displayEmpty
            inputProps={{ "aria-label": "Without label" }}
          >
            <MenuItem value="">
              <em>IRCTC eWallet</em>
            </MenuItem>
            <MenuItem>About</MenuItem>
          </Select>
          <Select
            className="text-white"
            value={age}
            displayEmpty
            inputProps={{ "aria-label": "Without label" }}
          >
            <MenuItem value="">
              <em>IRCTC-IPAY Payment Gateway</em>
            </MenuItem>
            <MenuItem>IRCTC-iPAY (PDF) (VIDEO)</MenuItem>
            <MenuItem>AutoPay</MenuItem>
          </Select>
          <Select
            className="text-white"
            value={age}
            displayEmpty
            inputProps={{ "aria-label": "Without label" }}
          >
            <MenuItem value="">
              <em>IRCTC Zone</em>
            </MenuItem>
            <MenuItem>Jago yatri jago</MenuItem>
            <MenuItem>Jansankhya Sthirata Kosh</MenuItem>
            <MenuItem>Maharaja"s Express</MenuItem>
          </Select>
        </div>
        <div className="flex flex-col gap-3 justify-center items-center w-full py-5">
          <Select
            className="text-white"
            value={age}
            displayEmpty
            inputProps={{ "aria-label": "Without label" }}
          >
            <MenuItem value="">
              <em>For Newly Migrated Agents</em>
            </MenuItem>
            <MenuItem>Login Manual - from old site to new site</MenuItem>
            <MenuItem>Operating Manual for new e-ticketing website</MenuItem>
            <MenuItem>
              Operating Manual for Agent Interface Application
            </MenuItem>
          </Select>
          <Select
            className="text-white"
            value={age}
            displayEmpty
            inputProps={{ "aria-label": "Without label" }}
          >
            <MenuItem value="">
              <em>Mobile Zone</em>
            </MenuItem>
            <MenuItem>PayTM</MenuItem>
            <MenuItem>JustDial</MenuItem>
            <MenuItem>redRail</MenuItem>
            <MenuItem>redBus</MenuItem>
            <MenuItem>Railofy</MenuItem>
            <MenuItem>Railyatri</MenuItem>
            <MenuItem>Trainman</MenuItem>
            <MenuItem>SBI YONO</MenuItem>
            <MenuItem>Yatra</MenuItem>
            <MenuItem>udChalo</MenuItem>
            <MenuItem>Kotak</MenuItem>
            <MenuItem>ICICI</MenuItem>
            <MenuItem>HDFC PayZapp</MenuItem>
            <MenuItem>Tripozo</MenuItem>
          </Select>
          <Select
            className="text-white"
            value={age}
            displayEmpty
            inputProps={{ "aria-label": "Without label" }}
          >
            <MenuItem value="">
              <em>Ask Disha ChatBot</em>
            </MenuItem>
            <MenuItem>Services of Ask Disha ChatBot</MenuItem>
            <MenuItem>Features of Ask Disha ChatBot</MenuItem>
          </Select>
          <Select
            className="text-white"
            value={age}
            displayEmpty
            inputProps={{ "aria-label": "Without label" }}
          >
            <MenuItem value="">
              <em>About Us</em>
            </MenuItem>
            <MenuItem>Awards & Achievements</MenuItem>
          </Select>
        </div>
      </div>
      <div className={styles.fbottom}>
        <Image src="/footer.png" width={700} height={400} alt="footer" />
        <div className={styles.footertext}>
          <div>Copyright Â© 2024 - www.vssut.co.in. All Rights Reserved</div>
          <div>
            Designed and Hosted by{" "}
            <span className="text-blue-700 font-bold">SHIVAM</span>
          </div>
          <div>
            <span className="text-blue-700 font-bold">Compatible Browsers</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
