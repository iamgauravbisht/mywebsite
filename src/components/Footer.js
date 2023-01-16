import { useContext } from "react";
import { mainContext } from "../helpers/Contexts";
import twitter from "../assets/images/twitter.svg";
import linkedin from "../assets/images/linkedin.svg";
import mail from "../assets/images/composing-mail.png";

export default function Footer() {
  const { pagestate, setPagestate } = useContext(mainContext);

  return (
    <section
      className=" text-white bg-violet-600  grid place-items-center relative py-14  "
      id="footer"
    >
      <div className="bg-[#141c3a] grid place-items-center sm:flex sm:justify-evenly w-[90%] items-center py-5 px-2 sm:py-0 rounded-2xl sm:absolute sm:top-[-15%]">
        <p className="text-2xl font-black ">Start a project</p>
        <div className="my-2">
          <p>Interested in working together? we should</p>
          <p>Queue up a time to chat. i'll buy a coffee.</p>
        </div>
        <a href="#About">
          <p
            className="sm:ml-5 border-2 border-[#5BE9B9] rounded-3xl px-3 py-1 cursor-pointer hover:text-white w-fit "
            onClick={() => setPagestate("connect")}
          >
            lets do this
          </p>
        </a>
      </div>
      <div className="sm:mt-6 my-3">
        <p className="text-2xl font-black  ">&lt;/&gt;GauravBisht</p>
        <div className="mb-5 mt-3">
          <p>Living, learning, & leveling up</p>
          <p>one day at a time.</p>
        </div>
        <div className="flex justify-evenly items-center" id="social-media">
          <a href="">
            <img src={twitter} />
          </a>
          <a href="">
            <img src={linkedin} />
          </a>
          <a href="">
            <img src={mail} />
          </a>
        </div>
      </div>
    </section>
  );
}
