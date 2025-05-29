import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

function ProjectCard({ project }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <Link to={`/project/${project.id}`} className="block">
        <div className="bg-white/90 border border-gray-200 shadow-md rounded-xl overflow-hidden hover:shadow-xl hover:scale-105 transition-transform duration-300">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-60 object-cover"
          />
          <div className="p-5">
            <h3 className="text-xl font-semibold text-indigo-800">{project.title}</h3>
            <p className="text-gray-600">{project.teaser}</p>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

export default ProjectCard;
