import { useContext, useState } from "react";
import { mainContext } from "../helpers/Contexts";
import menu from "../assets/images/menu-black.png";
import MobileMenu from "./MobileMenu";

function Navbar() {
  const { pagestate, setPagestate } = useContext(mainContext);

  return (
    <nav className="flex  justify-between  lg:justify-evenly  items-center w-full  px-3">
      <div>
        <p className="text-2xl font-black ">&lt;/&gt;GauravBisht</p>
      </div>
      <img
        src={menu}
        className="block lg:hidden cursor-pointer"
        onClick={() => setPagestate("menu")}
      />
      <ul className="lg:flex text-xl hidden">
        <a href="#About">
          <li className="ml-5 border-2 border-violet-700 rounded-3xl px-3 py-1 cursor-pointer hover:text-white hover:bg-violet-700 text-violet-700">
            About me
          </li>
        </a>
        <a href="#Project">
          <li className="ml-5 border-2 border-violet-700 rounded-3xl px-3 py-1 cursor-pointer hover:text-white hover:bg-violet-700 text-violet-700">
            Projects
          </li>
        </a>
        <a href="#Connect">
          <li
            className="ml-5 border-2 border-violet-700 rounded-3xl px-3 py-1 cursor-pointer hover:text-white hover:bg-violet-700 text-violet-700"
            onClick={() => setPagestate("connect")}
          >
            Connect
          </li>
        </a>
      </ul>
    </nav>
  );
}

export default Navbar;
