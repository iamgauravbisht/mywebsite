import { useContext } from "react";
import { mainContext } from "../helpers/Contexts";
import twitter from "../assets/images/twitter.svg";
import linkedin from "../assets/images/linkedin.svg";
import mail from "../assets/images/composing-mail.png";

export default function Footer() {
  const { pagestate, setPagestate } = useContext(mainContext);

  return (
    <section
      className="text-white bg-violet-600 h-96 grid place-items-center relative"
      id="footer"
    >
      <div className="bg-[#141c3a] flex justify-evenly w-4/5 items-center py-5 rounded-2xl absolute top-[-15%]">
        <p className="text-2xl font-black  ">Start a project</p>
        <div>
          <p>Interested in working together? we should</p>
          <p>Queue up a time to chat. i'll buy a coffee.</p>
        </div>
        <a href="#About">
          <p
            className="ml-5 border-2 border-[#5BE9B9] rounded-3xl px-3 py-1 cursor-pointer hover:text-white  "
            onClick={() => setPagestate("connect")}
          >
            lets do this
          </p>
        </a>
      </div>
      <div className=" ">
        <p className="text-2xl font-black  ">&lt;/&gt;GauravBisht</p>
        <div className="mb-5 mt-3">
          <p>Living, learning, & leveling up</p>
          <p>one day at a time.</p>
        </div>
        <div className="flex  justify-evenly items-center" id="social-media">
          <a href="">
            <img src={twitter} alt="" />
          </a>
          <a href="">
            <img src={linkedin} alt="" />
          </a>
          <a href="">
            <img src={mail} alt="" />
          </a>
        </div>
      </div>
    </section>
  );
}
