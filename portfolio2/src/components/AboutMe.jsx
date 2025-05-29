import { motion } from "framer-motion";
import profilePic from "../assets/profile.jpg"; 

function AboutMe() {
  return (
    <motion.section
      className="bg-white/90 backdrop-blur-sm rounded-xl shadow-lg p-8 mb-12 max-w-4xl mx-auto"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="flex flex-col md:flex-row items-center gap-8">
        <img
          src={profilePic}
          alt="Aimée Synthia Bassole"
          className="w-40 h-40 rounded-full object-cover shadow-md border-4 border-indigo-300"
        />
        <div>
          <h2 className="text-2xl font-bold text-indigo-800 mb-2">Hi, I'm Aimée Synthia Bassole</h2>
          <p className="text-gray-700 leading-relaxed">
            I'm a French national born in Burkina Faso and currently based in Oslo, Norway. After earning a BA in Nordic Studies 
            from Sorbonne Nouvelle in Paris and finishing my degree as an Erasmus student at the University of Oslo, 
            I’ve since made Oslo my home for nearly 7 years.
          </p>
          <p className="text-gray-700 mt-4 leading-relaxed">
            I'm currently completing a Front-End Development diploma at Noroff, where I specialize in building beautiful, accessible, 
            and responsive websites using technologies like React, TailwindCSS, and JavaScript.
          </p>
          <p className="text-gray-700 mt-4 leading-relaxed">
            Outside of tech, I enjoy cooking for friends, exploring Norway’s outdoors, and traveling to experience new cultures. 
            Feel free to connect with me on 
            <a href="https://www.linkedin.com/in/synthia-b-2b3334252/" className="text-indigo-600 hover:underline mx-1" target="_blank" rel="noopener noreferrer">LinkedIn</a> 
            or 
            <a href="https://github.com/synthiab1997" className="text-indigo-600 hover:underline mx-1" target="_blank" rel="noopener noreferrer">GitHub</a>!
          </p>
        </div>
      </div>
    </motion.section>
  );
}

export default AboutMe;
