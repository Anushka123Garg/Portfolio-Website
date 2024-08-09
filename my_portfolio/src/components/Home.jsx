import React from 'react';
import meh from '../assets/meh.jpg';
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from 'react-scroll';

const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800 pt-20 md:pt-8 relative"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col-reverse md:flex-row items-center justify-center h-full px-6 md:px-20">
        <div className="flex flex-col justify-center w-full md:w-1/2 text-center md:text-left">
          <h2 className="text-xl sm:text-2xl font-bold text-white mb-4">
            I'm a Full Stack Developer.
          </h2>
          <p className="text-gray-500 max-w-md text-sm sm:text-base mb-4 text-justify">
            I'm a full stack web developer, crafting innovative web solutions. 
            Passionate about problem-solving and creating user-friendly &
            visually appealing experiences. Let’s collaborate to turn your 
            ideas into reality! Check out my portfolio and get in touch—I’m 
            excited to take on new challenges and contribute to exciting projects! 
          </p>

          <div className="flex justify-center md:justify-start">
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="group text-white w-fit px-4 py-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={20} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>

        <div className="flex justify-center w-full md:w-1/2 mt-6 md:mt-0">
          <img
            src={meh}
            alt="my profile"
            className="rounded-xl w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
