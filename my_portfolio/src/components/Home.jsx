import React, { useState, useEffect } from "react";
import meh from "../assets/meh.jpg";
import './style.css';

const phrases = [
  "Full Stack Developer",
  "Web Enthusiast",
  "Problem Solver",
];

const Home = () => {
  const [currentPhrase, setCurrentPhrase] = useState(0);
  const [displayedPhrase, setDisplayedPhrase] = useState("");

  useEffect(() => {
    const currentPhraseText = phrases[currentPhrase];
    let charIndex = 0;

    const typingInterval = setInterval(() => {
      setDisplayedPhrase(currentPhraseText.slice(0, charIndex + 1));
      charIndex += 1;
      if (charIndex > currentPhraseText.length) {
        clearInterval(typingInterval);
        setTimeout(() => {
          setCurrentPhrase((prev) => (prev + 1) % phrases.length);
        }, 1500); // Pause before switching phrase
      }
    }, 100); // Speed of typing animation

    return () => clearInterval(typingInterval); // Clean up on unmount
  }, [currentPhrase]);

  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800 pt-12 md:pt-4 relative"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col-reverse md:flex-row items-center justify-center h-full px-6 md:px-12 lg:px-20">
        <div className="flex flex-col justify-center w-full md:w-1/2 text-center md:text-left">
          <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-white mb-4 whitespace-nowrap">
            Hello, I'm a <span className="text-yellow-400 typewriter-container-wrapper">
              <span className="typewriter-container">
                <span className="typewriter">{displayedPhrase}</span>
              </span>
            </span>.
          </h2>
          <p className="text-gray-500 max-w-md text-base lg:text-lg mb-4 text-justify">
            I'm a full stack web developer, crafting innovative web solutions.
            Passionate about problem-solving and creating user-friendly &
            visually appealing experiences. Let’s collaborate to turn your ideas
            into reality! Check out my portfolio and get in touch—I’m excited to
            take on new challenges and contribute to exciting projects!
          </p>

          <div className="flex justify-center md:justify-start">
            <a
              href="/RESUME.pdf"
              download
              className="group text-white w-fit px-3 py-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500
               to-blue-500 cursor-pointer text-sm hover:scale-110 duration-300"
            >
              Download Resume
            </a>
          </div>
        </div>

        <div className="flex justify-center w-full md:w-1/2 mt-6 md:mt-0">
          <img
            src={meh}
            alt="my profile"
            className="rounded-xl w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
