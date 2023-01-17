import { useContext } from "react";
import { mainContext } from "../helpers/Contexts";
import cross from "../assets/images/cross.png";

function MobileMenu() {
  const { pagestate, setPagestate } = useContext(mainContext);

  return (
    <div
      className="w-screen h-screen flex bg-gray-300"
      onClick={(e) => {
        if (e.target.classList.contains("link")) {
          setPagestate("mainpage");
        }
      }}
    >
      <ul className="w-[275px] h-full bg-white py-14 px-5 ">
        <div className="grid place-items-center my-5">
          <img src={cross} onClick={() => setPagestate("mainpage")} />
        </div>

        <a href="#About ">
          <li className="link border-2 border-violet-700 rounded-3xl px-3 py-1 cursor-pointer hover:text-white hover:bg-violet-700 text-violet-700">
            About me
          </li>
        </a>
        <a href="#Project ">
          <li className="link my-5 border-2 border-violet-700 rounded-3xl px-3 py-1 cursor-pointer hover:text-white hover:bg-violet-700 text-violet-700">
            Projects
          </li>
        </a>
        <a href="#Connect" onClick={() => setPagestate("connect")}>
          <li className="border-2 border-violet-700 rounded-3xl px-3 py-1 cursor-pointer hover:text-white hover:bg-violet-700 text-violet-700">
            Connect
          </li>
        </a>
      </ul>
    </div>
  );
}

export default MobileMenu;
