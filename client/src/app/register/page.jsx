"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Styles from "./register.module.css";
import { resisterfunction } from "@/utils/Apis";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CircularProgress from "@mui/material/CircularProgress";
import { useRouter } from "next/navigation";
import { useStateProvider } from "@/context/StateContext";
import { reducerCases } from "@/context/constants";
const Rgister = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [spin, setSpin] = useState(false);
  const [{userInfo,newUser}, dispatch] = useStateProvider();
  const router = useRouter();
  const handelSubmit = async (e) => {
    e.preventDefault();
    if (name === "") {
      toast.error("Enter your Name");
    } else if (email === "") {
      toast.error("Enter your Email");
    } else if (!email.includes("@gmail.com")) {
      toast.error("Enter Valid Email");
    } else if (password === "") {
      toast.error("Enter your Password");
    } else if (password.length < 6) {
      toast.error("Password Must be 6 digit");
    } else {
      setSpin(true);
      const data = await resisterfunction({
        name: name,
        email: email,
        password: password,
      });
      if (data.status == 201) {
        toast.success("Registration Successfull");
        const{id:id,email:email,name:name} = data.data;
        dispatch({
          type: reducerCases.SET_NEW_USER,
          newUser: true,
        });
        dispatch({
          type: reducerCases.SET_USER_INFO,
          userInfo: {
            id,
            email,
            name,
          },
        });
        setTimeout(() => {
          router.push("/login");
        }, 2000);
      } else {
        setSpin(false);
        toast.error(data.response.data);
      }
    }
  };
  return (
    <div className="mb-5">
      <section>
        <div className="flex relative items-center justify-between h-[85vh] w-full py-2">
          <div
            className={`${Styles.formleft} dark:bg-gray-800 dark:border-gray-700`}
          >
            <div className={Styles.glow} />
            <h1 className=" ml-2 text-sm font-bold leading-tight tracking-tight md:text-2xl text-blue-500">
              Book Ticket
            </h1>
            <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
              <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                  Create new account
                </h1>
                <form
                  className="space-y-4 md:space-y-6"
                  onSubmit={handelSubmit}
                >
                  <div>
                    <label
                      htmlFor="name"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Your name
                    </label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      onChange={(e) => setName(e.target.value)}
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="your name"
                      required=""
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Your email
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      onChange={(e) => setEmail(e.target.value)}
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="example@gmail.com"
                      required=""
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="password"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Password
                    </label>
                    <input
                      type="password"
                      name="password"
                      id="password"
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="••••••••"
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      required=""
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                  >
                    {spin ? (
                      <CircularProgress
                        style={{
                          height: "1.5rem",
                          width: "1.5rem",
                          color: "#fff",
                        }}
                      />
                    ) : (
                      <span>Sign Up</span>
                    )}
                  </button>
                  <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                    Do have an account?{" "}
                    <Link
                      href="/login"
                      className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                    >
                      Log in
                    </Link>
                  </p>
                </form>
              </div>
            </div>
          </div>
          <div className={Styles.imagecontainer}>
            <Image src="/register.gif" fill alt="image" sizes="100%" />
          </div>
          <div
            className={`${Styles.righttext} absolute right-0 top-[60%] flex flex-col`}
          >
            <div
              className={`${Styles.text} text-blue-600 drop-shadow-xl font-bold sm:text-medium md:text-3xl xl:text-5xl py-4`}
            >
              We provide{" "}
            </div>
            <div className="bg-white md:text-4xl xl:text-7xl font-bold text-black mix-blend-screen px-10 py-5 ">
              Best Services
            </div>
          </div>
        </div>
        <ToastContainer />
      </section>
    </div>
  );
};

export default Rgister;
