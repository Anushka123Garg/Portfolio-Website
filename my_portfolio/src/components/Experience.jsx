import React from "react";
import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import reactjs from "../assets/reactjs.png";
import node from "../assets/node.png";
import sql from "../assets/sql.png";
import github from "../assets/github.png";
import tailwind from "../assets/tailwind.png";
import cpp from "../assets/cpp.jpg";
import python from "../assets/python.png";
import mongodb from "../assets/mongodb.webp";
import vscode from "../assets/vscode.png";

const Experience = () => {
  const techs = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: javascript,
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: reactjs,
      title: "ReactJS",
      style: "shadow-sky-400",
    },
    {
      id: 5,
      src: node,
      title: "NodeJS",
      style: "shadow-green-500",
    },
    {
      id: 6,
      src: sql,
      title: "SQL",
      style: "shadow-pink-500",
    },
    {
      id: 7,
      src: github,
      title: "GitHub",
      style: "shadow-gray-200",
    },
    {
      id: 8,
      src: tailwind,
      title: "Tailwind",
      style: "shadow-sky-300",
    },
    {
      id: 6,
      src: cpp,
      title: "C/C++",
      style: "shadow-blue-500",
    },
    {
      id: 7,
      src: python,
      title: "Python",
      style: "shadow-yellow-500",
    },
    {
      id: 8,
      src: mongodb,
      title: "MongoDB",
      style: "shadow-purple-500",
    },
    {
      id: 8,
      src: vscode,
      title: "VScode",
      style: "shadow-gray-500",
    },
  ];

  return (
    <div
      name="techstack"
      className="w-full bg-gradient-to-b from-black to-gray-800 text-white py-10 md:py-12 px-6 md:px-12"
    >
      <div className="flex flex-col md:px-8 max-w-screen-lg mx-auto px-4">
        <div>
          <p className="text-3xl font-bold inline border-b-4 border-gray-500">
            Tech Stack
          </p>
          <p className="py-2 mb-8 text-gray-300">Some of the technologies I am familiar with.</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 sm:gap-8 text-center px-2 sm:px-6">
          {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`${style} shadow-md hover:scale-105 duration-500 py-4 px-2 sm:px-4 rounded-lg`}
            >
              <img src={src} alt={title} className="w-16 h-16 mx-auto" />
              <p className="mt-4 text-sm md:text-base">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
