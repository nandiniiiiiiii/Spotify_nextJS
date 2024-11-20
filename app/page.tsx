"use client";
import { Appbar } from "./components/Appbar";
import Footer from "./components/Footer";
import Landingpage from "./components/Landingpage";
import Redirect from "./components/Redirect";

export default function Home() {
  return (
    <div className="flex flex-col  min-h-screen bg-black text-white">
      <Appbar/>
      <Redirect/>
      <Landingpage/>
      <Footer/>
    </div>
  );
}
