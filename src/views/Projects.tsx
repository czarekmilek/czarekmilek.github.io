import Sidebar from "../components/Sidebar";
import ProjectCard from "../components/ProjectCard";
import projects from "../data/projectData";

export default function Projects(): JSX.Element {
  return (
    <>
      <Sidebar heading="PROJECTS" />
      <div className="flex -mt-2 justify-center flex-col items-center">
        <div className="h-6 border-r-2 border-slate-600" />
      </div>
      <div className="pl-8 pr-10 flex justify-center flex-col items-center">
        {/* Project Title */}
        <div className="flex items-center">
          <div className="w-3 h-3 rounded-full bg-orange-400" />
          <div className="w-96 border-[1px] border-slate-500 rounded-t-full" />
          <h2
            className="text-xl tracking-widest font-bold mb-4 p-2 px-4 border-[1px]
        border-slate-500 rounded-full"
          >
            PROJECTS
          </h2>
          <div className="w-96 border-[1px] border-slate-500 rounded-t-full" />
          <div className="h-3 w-3 rounded-full bg-orange-400" />
        </div>
      </div>
      <div className="ml-32 mr-8 grid grid-cols-1 md:grid-cols-3 gap-3">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </>
  );
}
