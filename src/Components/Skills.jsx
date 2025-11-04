import React from "react";
import { FaJava, FaReact, FaPython, FaGitAlt, FaGithub, FaBrain} from "react-icons/fa";
import { SiSpringboot, SiJavascript, SiMongodb } from "react-icons/si";

const skills = [
  { name: "Java", icon: <FaJava size={50} color="#f89820" /> },
  { name: "Python", icon: <FaPython size={50} color="#3776AB" /> },
  { name: "Spring Boot", icon: <SiSpringboot size={50} color="#6DB33F" /> },
  { name: "React", icon: <FaReact size={50} color="#61DBFB" /> },
  { name: "JavaScript", icon: <SiJavascript size={50} color="#F0DB4F" /> },
  { name: "DSA", icon: <FaBrain size={50} color="#ffcc00"/>},
  { name: "MongoDB", icon: <SiMongodb size={50} color="#E48E00" /> },
  { name: "Git", icon: <FaGitAlt size={50} color="#F1502F"/>},
  { name: "GitHub", icon: <FaGithub size={50} color="#ffffff"/>},
];

function Skills() {
  return (
    <section className="bg-[#00131c] text-white py-16 px-8">
      <h2 className="text-3xl font-bold mb-10 text-center font-times text-red-400">Skills</h2>

      <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="inline-flex flex-col items-center justify-center p-6 border border-red-700 rounded-2xl bg-[#002633] min-w-[180px] shadow-md hover:scale-105 transition duration-300 ease-in-out"
          >
            {skill.icon}
            <h3 className="mt-3 text-lg font-semibold ">{skill.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
