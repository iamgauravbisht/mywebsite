import { useContext } from "react";
import { mainContext } from "../helpers/Contexts";
import svgGadgets from "../assets/images/illustration-gadgets.svg";
import menu from "../assets/images/menu-black.png";

export default function Header() {
  const { pagestate, setPagestate } = useContext(mainContext);

  return (
    <section className=" w-full h-screen pt-10 flex flex-col justify-between items-center px-2 ">
      <nav className="flex  justify-between  lg:justify-evenly  items-center w-full  px-3">
        <div>
          <p className="text-2xl font-black ">&lt;/&gt;GauravBisht</p>
        </div>
        <img src={menu} className="block lg:hidden" />
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
