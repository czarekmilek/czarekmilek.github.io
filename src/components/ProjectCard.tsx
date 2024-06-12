import { Project } from "../types/Project";

interface Props {
  project: Project;
}

export default function ProjectCard({ project }: Props): JSX.Element {
  const { title, description, githubLink, technologies, showcaseImage } =
    project;

  return (
    <div className="bg-neutral-800 shadow-lg rounded-lg overflow-hidden relative">
      <div className="p-3 h-60">
        <h2 className="text-lg font-semibold mb-1">{title}</h2>
        <p className="text-gray-400 text-sm mb-4">{description}</p>
        <div className="flex flex-row">
          <div className="w-28 h-28 -mt-4">
            <img
              className="object-center p-4"
              src={showcaseImage}
              alt={title}
            />
          </div>
          <div className="-mt-3">
            <h3 className="text-base font-semibold mb-1">Technologies Used:</h3>
            <ul className="list-disc text-sm list-inside">
              {technologies.map((tech, index) => (
                <li key={index}>{tech}</li>
              ))}
            </ul>
          </div>
        </div>
        <a
          href={githubLink}
          className="text-sm text-cyan-500 hover:text-cyan-700 transition duration-300 absolute bottom-0 right-5 ml-6 mb-6"
        >
          View on GitHub
        </a>
      </div>
    </div>
  );
}
