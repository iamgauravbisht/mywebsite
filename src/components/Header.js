import { useContext, useState } from "react";
import svgGadgets from "../assets/images/illustration-gadgets.svg";
import Navbar from "./Navbar";

function Header() {
  return (
    <section className=" w-full h-screen pt-10 flex flex-col justify-between items-center px-2 ">
      <Navbar />
      <section className="h-full  flex flex-col justify-center items-center ">
        <p className="text-2xl font-xl">Hey! I am Gaurav.</p>
        <p className="text-2xl font-xl">
          I build interactive websites that run across platforms & devices
        </p>
      </section>
      <div className="lg:w-2/4 w-full ">
        <img src={svgGadgets} />
      </div>
    </section>
  );
}
export default Header;
