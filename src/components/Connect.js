import twitter from "../assets/images/twitter.svg";
import linkedin from "../assets/images/linkedin.svg";
import mail from "../assets/images/composing-mail.png";
import cross from "../assets/images/cross.png";
import { mainContext } from "../helpers/Contexts";
import { useContext } from "react";

export default function Connect() {
  const { pagestate, setPagestate } = useContext(mainContext);
  return (
    <section
      className="grid place-items-center text-white  h-screen bg-slate-600 w-full"
      id="Connect"
    >
      <div className="w-3/4 h-3/4 px-2 grid place-items-center bg-[#141c3a] rounded-xl relative">
        <div className="absolute top-1 right-1 cursor-pointer">
          <img src={cross} onClick={() => setPagestate("mainpage")} />
        </div>

        <form action="" className="grid ">
          <label htmlFor="" className=" text-left">
            {" "}
            Name{" "}
          </label>
          <input
            type="text"
            name=""
            id=""
            className="block mb-3 px-2 text-black w-full rounded-md focus:border-indigo-600"
            required
          />
          <label htmlFor="" className=" text-left">
            {" "}
            Email{" "}
          </label>
          <input
            type="email"
            name=""
            id=""
            className="block mb-3 px-2 text-black rounded-md focus:border-indigo-600 "
            required
          />
          <label htmlFor="" className=" text-left">
            {" "}
            Contact no.{" "}
          </label>
          <input
            type="tel"
            name=""
            id=""
            className="block mb-3 px-2 text-black  rounded-md focus:border-indigo-600"
          />
          <label htmlFor="" className=" text-left">
            {" "}
            Job Description{" "}
          </label>
          <textarea
            name=""
            id=""
            className="block mb-3 px-2 text-black rounded-md focus:border-indigo-600 h-20"
          />
          <button
            type="submit"
            className="ml-5 border-2 border-violet-700 rounded-3xl px-3 py-1 cursor-pointer hover:text-white hover:bg-violet-700 text-violet-700 "
          >
            Send
          </button>
        </form>
      </div>
    </section>
  );
}
