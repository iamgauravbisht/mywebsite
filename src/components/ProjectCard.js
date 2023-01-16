import personImg from "../assets/images/profile-1.jpg";
import github from "../assets/images/github.svg";

export default function ProjectCard() {
  return (
    <div className=" sm:flex  sm:justify-center  sm:text-left sm:h-48 my-3 ">
      <div className=" grid place-items-center mx-2 w-full">
        <img src={personImg} className="rounded-md " />
        <div className="flex sm:justify-between w-fit justify-center sm:my-0 my-2">
          <a href="" className="mx-3">
            <p className=" border-2 border-violet-700 rounded-3xl px-3 py-1 cursor-pointer hover:text-white hover:bg-violet-700 text-violet-700">
              Visit Site
            </p>
          </a>
          <img src={github} className="mx-3 cursor-pointer" />
        </div>
      </div>

      <p className="text-sm lg:text-lg font-black text-violet-800 p-2">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio provident
        voluptates perferendis temporibus facilis aperiam, nobis saepe
        exercitationem adipisci quos distinctio laborum rerum sequi odit
        architecto. Ipsa illo aspernatur iste!
      </p>
    </div>
  );
}
