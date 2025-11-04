import React from "react";

const educationData = [
  {
    degree: "Bachelor of Technology (B.Tech) in Computer Science and Engineering",
    college: "Ellenki College of Engineering and Technology",
    year: "2022 - 2026",
    details: "Focused on Java, Web development, DSA using java and software development. Participated in coding competitions and projects.",
  },
  {
    degree: "Intermediate (Class XII)",
    college: "Saanvi Junior College",
    year: "2020 - 2022",
    details: "Specialized in MPC stream. Scored 90% overall.",
  },
  {
    degree: "High School (Class X)",
    college: "Government High School",
    year: "2019 - 2020",
    details: "Scored 90% in final board examinations.",
  },
];

function Education() {
  return (
    <section className="bg-[#00131c] text-white py-16 px-8">
      <h2 className="text-3xl font-bold mb-10 text-center font-times text-red-400">Educations</h2>

      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {educationData.map((edu, index) => (
          <div
            key={index}
            className="bg-[#002633] border border-red-700 rounded-2xl p-6 shadow-lg hover:scale-105 transition duration-300 ease-in-out"
          >
            <h3 className="text-xl font-semibold text-red-400 mb-2">{edu.degree}</h3>
            <p className="text-gray-300 font-medium">{edu.college}</p>
            <p className="text-gray-400 text-sm mb-3">{edu.year}</p>
            <p className="text-gray-400 text-sm leading-relaxed">{edu.details}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Education;
