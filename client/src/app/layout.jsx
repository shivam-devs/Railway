'use client';
import Navbar from "@/components/navbar/navbar";
import "./globals.css";
import Footer from "@/components/footer/footer";
import reducer, { initialState } from "@/context/StateReducer.jsx";
import { StateProvider } from "@/context/StateContext.jsx";
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Railway</title>
      </head>
      <body>
      <StateProvider initialState={initialState} reducer={reducer}>
        <Navbar />
        <div className="container">
        {children}
        <Footer />
        </div>
      </StateProvider>
        <script src="https://checkout.razorpay.com/v1/checkout.js"></script>
        </body>
    </html>
  );
}
