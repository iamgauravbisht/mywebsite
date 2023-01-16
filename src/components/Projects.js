import personImg from "../assets/images/profile-1.jpg";
import menu from "../assets/images/menu.svg";
// import wave from "../assets/images/bg-curvy.svg";
// import IDEpicture from "../assets/images/editorpic.svg";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <>
      <section
        className="w-full h-screen grid place-items-center bg-violet-700 text-white text-center px-2"
        id="Project"
      >
        <div className=" lg:w-2/4 w-full">
          <h2 className="text-3xl font-semibold">
            Hi, this section is under Construction write now.
          </h2>
          <p className="text-md font-semibold">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus,
            minima voluptate. Recusandae dolorem corrupti deserunt consequatur,
            explicabo accusamus sapiente corporis. Soluta nesciunt pariatur
            explicabo error, voluptatum in dolorum ducimus magni.
          </p>
        </div>
      </section>
      <section className="w-full  h-screen  relative">
        <div className="absolute lg:top-[-25%] top-[-15%] grid place-items-center ">
          <div className="h-11  w-4/5 bg-[#141c3a] border-[#141c3a] border-2 px-7 flex justify-between items-center rounded-t-xl">
            <div className="h-6 w-48 bg-white"></div>
            <img src={menu} />
          </div>
          <div className="w-4/5 h-screen grid place-items-center px-3 bg-white overflow-y-scroll border-[#141c3a] border-2">
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
          </div>
        </div>
      </section>
    </>
  );
}
