import React, { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Message Sent:", formData);
    alert("Thank you for reaching out! I’ll get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section
      id="contact"
      className="bg-[#00131c] text-white py-16 px-8 flex flex-col items-center"
    >
      <h2 className="text-3xl font-bold mb-8 text-center text-red-400 font-times">
        Contact Me
      </h2>

      <form
        onSubmit={handleSubmit}
        className="w-full max-w-lg bg-[#002633] border border-red-700 rounded-2xl p-8 shadow-lg"
      >
        <div className="mb-5">
          <label className="block mb-2 text-sm font-medium">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full p-3 rounded-md bg-[#001a26] text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-red-600"
          />
        </div>

        <div className="mb-5">
          <label className="block mb-2 text-sm font-medium">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full p-3 rounded-md bg-[#001a26] text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-red-600"
          />
        </div>

        <div className="mb-5">
          <label className="block mb-2 text-sm font-medium">Message</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows="4"
            className="w-full p-3 rounded-md bg-[#001a26] text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-red-600"
          />
        </div>

        <button
          type="submit"
          className="w-full py-3 bg-red-700 hover:bg-red-800 rounded-md font-semibold transition duration-300"
        >
          Send Message
        </button>
      </form>

      <div className="mt-10 text-center">
        <p className="text-gray-400">Or reach me at:</p>
        <p className="text-red-400 font-semibold mt-2">Maruthivemula95@email.com</p>

        <div className="flex justify-center mt-4 gap-6 text-xl">
          <a
            href="https://github.com/VemulaMaruthi"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-red-400"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/vemulamaruthi/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-red-400"
          >
            LinkedIn
          </a>
          <a 
            href="https://leetcode.com/u/maruthi_95/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-red-400"
            >
                Leetcode
            </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
