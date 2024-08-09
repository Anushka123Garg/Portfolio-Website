import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="h-screen w-full bg-gradient-to-b from-black to-gray-800 text-white py-12 px-6 md:py-16 md:px-12 flex items-center justify-center"
    >
      <div className="flex flex-col md:px-8 max-w-screen-lg mx-auto px-4">
        <div className="pb-8 text-center md:text-left">
          <p className="text-2xl sm:text-3xl md:text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>
        <div className="space-y-6 md:space-y-8 text-center">
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-justify">
            I am Anushka Garg, an emerging software developer with a strong passion 
            for coding and a drive for acquiring new skills. I have honed my skills 
            in MERN stack development, creating responsive and visually appealing websites.
            My profound interest in Machine learning and deep learning motivates me to 
            explore and implement advanced techniques, continuously expanding my knowledge 
            in these rapidly evolving fields.
          </p>

          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-justify">
            As a proactive problem-solver and a team player, I stay ahead of emerging technologies 
            to ensure that my applications are both innovative and scalable. I am always on the lookout for new 
            opportunities to collaborate in the tech industry. Let’s innovate together!
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
