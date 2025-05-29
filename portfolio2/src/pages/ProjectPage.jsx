import { useParams } from "react-router-dom";
import { projects } from "../data/projectData";

function ProjectPage() {
  const { id } = useParams();
  const project = projects.find((proj) => proj.id === id);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center text-xl text-red-600">
        Project not found
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f9fafb] via-[#eef2ff] to-[#e2e8f0] py-16 px-6 lg:px-12">
      <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-xl p-10 lg:p-14">
        <h1 className="text-4xl font-bold text-indigo-800 mb-8">{project.title}</h1>

        <img
          src={project.image}
          alt={project.title}
          className="w-full h-[400px] object-cover rounded-lg mb-8 shadow-lg"
        />

        <p className="text-lg text-gray-700 mb-8">{project.description}</p>

        <div className="flex flex-wrap gap-4 mb-10">
          <a
            href={project.liveLink}
            className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-6 rounded-lg transition shadow-md"
            target="_blank"
            rel="noopener noreferrer"
          >
            🔗 View Live
          </a>
          <a
            href={project.repoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-800 hover:bg-gray-900 text-white font-medium py-3 px-6 rounded-lg transition shadow-md"
          >
            💻 GitHub Repo
          </a>
        </div>

        <div className="border-t pt-6">
          <h2 className="text-2xl font-semibold text-indigo-800 mb-3">
            Reflection & Improvements
          </h2>
          <p className="text-gray-700 text-base leading-relaxed">{project.reflection}</p>
        </div>
      </div>
    </div>
  );
}

export default ProjectPage;
