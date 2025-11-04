import React from "react";

const projects = [
  {
    title: "Portfolio Website",
    description:
      "A personal portfolio website built using React and Tailwind CSS, connected with Spring Boot backend for dynamic content like profile photo and admin updates.",
    tech: ["React", "Tailwind CSS", "Spring Boot"],
    link: "https://github.com/VemulaMaruthi/My_Portfolio",
  },
  {
    title: "Virtual Study Buddy",
    description:
      "Full-stack authentication website with secure login, signup, and forgot password using Spring Boot and MongoDB.",
    tech: ["Spring Boot", "MongoDB", "React"],
    link: "https://github.com/VemulaMaruthi/virtual-study-buddy",
  },
  {
    title: "Weather Forecast App",
    description:
      "A responsive weather application that fetches live weather data using OpenWeather API and displays temperature, humidity, and wind details.",
    tech: ["React", "API Integration", "JavaScript"],
    link: "https://github.com/yourusername/weather-app",
  },
];

function Projects() {
  return (
    <section className="bg-[#00131c] text-white py-16 px-8">
      <h2 className="text-3xl font-bold mb-10 text-center text-red-400 font-times">Projects</h2>

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-[#002633] border border-red-700 rounded-2xl p-6 shadow-lg hover:scale-105 transition duration-300 ease-in-out"
          >
            <h3 className="text-xl font-semibold text-red-400 mb-3">
              {project.title}
            </h3>
            <p className="text-gray-300 mb-4">{project.description}</p>

            <div className="flex flex-wrap gap-2 mb-4">
              {project.tech.map((tech, idx) => (
                <span
                  key={idx}
                  className="bg-red-700/30 text-red-300 text-xs px-3 py-1 rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>

            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-red-400 hover:text-red-500 underline"
            >
              View Project →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
