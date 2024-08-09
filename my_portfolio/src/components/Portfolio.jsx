import React from "react";
import arrayDestruct from "../assets/portfolio/arrayDestruct.jpg";
import installNode from "../assets/portfolio/installNode.jpg";
import navbar from "../assets/portfolio/navbar.jpg";
import reactParallax from "../assets/portfolio/reactParallax.jpg";
import reactSmooth from "../assets/portfolio/reactSmooth.jpg";
import reactWeather from "../assets/portfolio/reactWeather.jpg";

const Portfolio = () => {
  const portfolios = [
    { id: 1, src: arrayDestruct, title: "Wordify" },
    { id: 2, src: reactParallax, title: "Time Series Analysis" },
    { id: 3, src: navbar, title: "Portfolio Website" },
    { id: 4, src: reactSmooth, title: "Real Estate Platform" },
    { id: 5, src: installNode, title: "Automated ML Script" },
    { id: 6, src: reactWeather, title: "College Management System" },
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
          {portfolios.map(({ id, src, title }) => (
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
                <p className="text-xs text-center font-semibold">{title}</p>
              </div>
              <div className="flex items-center justify-center gap-2 p-2">
                <button className="w-1/2 px-2 py-1 text-xs duration-200 hover:scale-105 bg-gray-700 rounded">
                  Demo/About
                </button>
                <button className="w-1/2 px-2 py-1 text-xs duration-200 hover:scale-105 bg-gray-700 rounded">
                  Code
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
