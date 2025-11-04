import React from "react";

const blogPosts = [
  {
    title: "How I Built My Portfolio Using React and Spring Boot",
    date: "October 2025",
    description:
      "In this post, I explain how I designed and developed my personal portfolio website using React for the frontend and Spring Boot for the backend.",
    link: "#",
  },
  {
    title: "My DSA Learning Journey",
    date: "September 2025",
    description:
      "Here I share how I started with basic algorithms like Bubble Sort and gradually improved my problem-solving skills on LeetCode.",
    link: "#",
  },
  {
    title: "Learning Spring Boot",
    date: "August 2025",
    description:
      "Learn what is Spring boot are, how it is used for backend, and how to build project using spring boot.",
    link: "#",
  },
];

function Blog() {
  return (
    <section className="bg-[#00131c] text-white py-16 px-8">
      <h2 className="text-3xl font-bold mb-10 text-center text-red-400 font-times">
        Blog
      </h2>

      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((post, index) => (
          <div
            key={index}
            className="bg-[#002633] border border-red-700 rounded-2xl p-6 shadow-lg hover:scale-105 transition duration-300 ease-in-out"
          >
            <h3 className="text-xl font-semibold text-red-400 mb-2">
              {post.title}
            </h3>
            <p className="text-gray-400 text-sm mb-3">{post.date}</p>
            <p className="text-gray-300 mb-4">{post.description}</p>
            <a
              href={post.link}
              className="text-red-400 hover:underline font-medium"
            >
              Explore →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Blog;
