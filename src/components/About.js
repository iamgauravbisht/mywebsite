import { useContext } from "react";
import { mainContext } from "../helpers/Contexts";
import twitter from "../assets/images/twitter.svg";
import linkedin from "../assets/images/linkedin.svg";
import mail from "../assets/images/composing-mail.png";

export default function About() {
  const { pagestate, setPagestate } = useContext(mainContext);

  return (
    <>
      <section
        className=" w-full  h-screen grid place-items-center  text-white text-center  bg-violet-700 px-2"
        id="About"
      >
        <div className="lg:h-2/4 lg:w-2/4 w-full">
          <p className="text-2xl font-semibold">
            Hi, I’m Gaurav. Nice to meet you.
          </p>
          <p className="text-md font-semibold mt-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis eaque
            cupiditate repudiandae sint, possimus sunt hic natus doloremque
            suscipit itaque, praesentium asperiores nesciunt optio, excepturi
            alias nam iste facilis consequatur.
          </p>
        </div>
      </section>
      <section
        className=" my-20 grid place-items-center text-white relative"
        id="Connect"
      >
        <div className="lg:w-2/4 bg-[#141c3a] p-4 rounded-lg  absolute w-full">
          <div
            className="w-3/4 flex justify-evenly items-center m-auto"
            id="social-media"
          >
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

          <div className="my-5  grid place-items-center gap-3 ">
            <p className="text-2xl font-black  ">Start a project</p>
            <div>
              <p>Interested in working together? we should</p>
              <p>Queue up a time to chat. i'll buy a coffee.</p>
            </div>
            <a href="#About">
              <p
                className=" border-2 border-[#5BE9B9] rounded-3xl px-3 py-1 cursor-pointer "
                onClick={() => setPagestate("connect")}
              >
                lets do this
              </p>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
