import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/projectData";
import { motion } from "framer-motion";


function HomePage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      {/* About Me Section */}
      <motion.section
        className="bg-white/90 backdrop-blur-sm rounded-xl shadow-lg p-8 mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="flex flex-col md:flex-row items-center gap-8">
          <img
            src="/assets/profile.jpg"
            alt="Aimée Synthia Bassole"
            className="w-40 h-40 rounded-full object-cover shadow-md border-4 border-indigo-300"
          />
          <div>
            <h2 className="text-2xl font-bold text-indigo-800 mb-2">Hi, I'm Aimée Synthia Bassole</h2>
            <p className="text-gray-700 leading-relaxed">
              I'm a French national born in Burkina Faso, living in Oslo, Norway for nearly 7 years. I earned a BA in Nordic Studies 
              from Sorbonne Nouvelle (Paris), finishing my degree as an Erasmus student at the University of Oslo.
            </p>
            <p className="text-gray-700 mt-4 leading-relaxed">
              I’m currently completing a Front-End Development diploma at Noroff where I build accessible, responsive websites with React, TailwindCSS, and JavaScript.
              I also enjoy cooking, hiking in Norwegian nature, and traveling.
            </p>
          </div>
        </div>
      </motion.section>

      {/* Projects Section */}
      <h2 className="text-4xl font-bold text-center text-indigo-800 mb-10">Featured Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>

      {/* Contact Section */}
      <div className="text-center mt-16">
        <h2 className="text-2xl font-semibold text-indigo-800 mb-4">Let's Connect</h2>
        <a
          href="mailto:synthia.bassole@yahoo.fr"
          className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-6 rounded-lg transition shadow-md"
        >
          📧 Email Me
        </a>
      </div>
    </div>
  );
}

export default HomePage;
