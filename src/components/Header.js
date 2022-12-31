import { useContext } from "react";
import { mainContext } from "../helpers/Contexts";
import svgGadgets from "../assets/images/illustration-gadgets.svg";

export default function Header() {
  const { pagestate, setPagestate } = useContext(mainContext);

  return (
    <section className=" w-full h-screen pt-10 flex flex-col justify-between items-center">
      <nav className="flex justify-evenly items-center w-full">
        <div>
          <p className="text-2xl font-black ">&lt;/&gt;GauravBisht</p>
        </div>
        <ul className="flex text-xl">
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
      <section className="h-full  flex flex-col justify-between items-center  ">
        <div className=" mt-14 ">
          <p className="text-2xl font-xl">Hey! I am Gaurav.</p>
          <p className="text-2xl font-xl">
            I build interactive websites that run across platforms & devices
          </p>
        </div>
        <div className="w-2/4 ">
          <img src={svgGadgets} alt="" srcset="" />
        </div>
      </section>
    </section>
  );
}
