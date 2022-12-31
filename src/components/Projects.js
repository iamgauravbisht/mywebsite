import personImg from "../assets/images/profile-1.jpg";
import menu from "../assets/images/menu.svg";
// import wave from "../assets/images/bg-curvy.svg";
// import IDEpicture from "../assets/images/editorpic.svg";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <>
      <section
        className="w-full  h-screen grid place-items-center bg-violet-700 text-white text-center"
        id="Project"
      >
        <div className="h-2/4 w-2/4 ">
          <h2 className="text-3xl font-semibold">
            Hi, this section is under Construction write now.
          </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus,
            minima voluptate. Recusandae dolorem corrupti deserunt consequatur,
            explicabo accusamus sapiente corporis. Soluta nesciunt pariatur
            explicabo error, voluptatum in dolorum ducimus magni.
          </p>
        </div>
      </section>
      <section className="w-full h-screen  relative">
        <div className="absolute top-[-25%] grid place-items-center ">
          <div className="h-11  w-4/5 bg-[#141c3a] border-[#141c3a] border-2 px-7 flex justify-between items-center rounded-t-xl">
            <div className="h-6 w-48 bg-white"></div>
            <img src={menu} alt="" srcset="" />
          </div>
          <div className="w-4/5 h-screen grid place-items-center px-5 bg-white overflow-y-scroll border-[#141c3a] border-2">
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
