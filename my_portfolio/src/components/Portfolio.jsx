import React from "react";
import wordify from "../assets/portfolio/wordify.png";
import weather from "../assets/portfolio/weather.webp";
import portfolio from "../assets/portfolio/portfolio.png";
import mltool from "../assets/portfolio/mltool.png";
import college from "../assets/portfolio/college.jpg";
import estate from "../assets/portfolio/estate.jpg";
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';

const Portfolio = () => {
  const portfolios = [
    { id: 1, src: wordify, title: "Wordify", demoLink: "https://wordifyy.netlify.app/", codeLink: "https://github.com/Anushka123Garg/WORDIFY" },
    { id: 2, src: weather, title: "Time Series Analysis", demoLink: "https://example.com/demo2", codeLink: "https://github.com/Anushka123Garg/Time-Series-Analysis" },
    { id: 3, src: portfolio, title: "Portfolio Website", demoLink: "https://example.com/demo3", codeLink: "https://github.com/Anushka123Garg/Portfolio-Website" },
    { id: 4, src: estate, title: "Real Estate Platform", demoLink: "https://example.com/demo4", codeLink: "https://github.com/Anushka123Garg/Real-Estate" },
    { id: 5, src: mltool, title: "Automated ML Script", demoLink: "https://example.com/demo5", codeLink: "https://github.com/Anushka123Garg/Automated-ML-Tool-Classifier" },
    { id: 6, src: college, title: "College Management System", demoLink: "https://example.com/demo6", codeLink: "https://github.com/example/repo6" },
  ];

  return (
    <div
      name="portfolio"
      className="w-full bg-gradient-to-b from-black to-gray-800 text-white py-12 px-6 md:py-16 md:px-12"
    >
      <div className="flex flex-col md:px-8 max-w-screen-lg mx-auto px-4">
        <div className="pb-8">
          <p className="text-2xl sm:text-3xl md:text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-2 text-gray-300 text-xs sm:text-sm md:text-base">
            Check out some of my projects.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
          {portfolios.map(({ id, src, title, demoLink, codeLink }) => (
            <div
              key={id}
              className="shadow-md shadow-gray-600 rounded-lg max-w-xs sm:max-w-sm mx-auto"
            >
              <img
                src={src}
                alt={title}
                className="rounded-t-lg w-full h-38 object-cover duration-200 hover:scale-105"
              />
              <div className="p-2">
                <div className="flex items-center justify-between">
                  <a
                    href={demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center p-2 duration-200 hover:scale-105"
                  >
                    <FaExternalLinkAlt className="text-xl" />
                  </a>
                  <p className="text-xs text-center font-bold flex-1">{title}</p>
                  <a
                    href={codeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center p-2 duration-200 hover:scale-105"
                  >
                    <FaGithub className="text-xl" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
