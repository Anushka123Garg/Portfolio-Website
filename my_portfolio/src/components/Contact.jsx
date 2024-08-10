import React from "react";
import leetcode from "../assets/leetcode.svg";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full bg-gradient-to-b from-black to-gray-800 text-white py-12 md:py-12 px-6 md:px-12"
    >
      <div className="flex flex-col md:px-8 max-w-screen-lg mx-auto px-4">
        <div>
          <p className="text-3xl font-bold inline border-b-4 border-gray-500">
            Contact
          </p>
          <p className="py-2 mb-8">
            Submit the form below to get in touch with me.
          </p>
        </div>

        <div className="flex items-center justify-center">
          <form
            action="https://getform.io/f/7d64c8dd-b591-4136-bfa1-ad32b42c576b"
            method="POST"
            className="flex flex-col w-full md:w-1/2"
          >
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            ></input>

            <input
              type="text"
              name="email"
              placeholder="Enter your email"
              className="my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            ></input>

            <textarea
              name="message"
              rows="10"
              placeholder="Enter your message"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            ></textarea>

            <button className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300">
              Let's connect!
            </button>
          </form>
        </div>

        {/* Social media icons for small screens */}
        <div className="flex justify-center space-x-4 pt-8 md:hidden">
          <a
            href="mailto:anushkagarg2912@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-2xl hover:text-gray-400"
          >
            <HiOutlineMail />
          </a>
          <a
            href="https://www.linkedin.com/in/anushka-garg-28664922b/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-2xl hover:text-gray-400"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/Anushka123Garg"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-2xl hover:text-gray-400"
          >
            <FaGithub />
          </a>
          <a
            href="https://leetcode.com/u/anushkagarg_2912/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-2xl hover:text-gray-400"
          >
            <img src={leetcode} alt="LeetCode" className="w-6 h-6 rounded" />
          </a>
          <a
            href="public\RESUME.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-2xl hover:text-gray-400"
          >
            <BsFillPersonLinesFill />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
