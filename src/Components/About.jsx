import React from "react";

const About = () => {
  return (
    <div className="flex flex-col md:flex-row leading-10 px-4 md:px-20 border-black my-10 border-b-2 pb-10 items-center">
      <div className="w-full md:w-1/2 mb-6 md:mb-0">
        <span className="text-3xl sm:text-4xl md:text-6xl text-orange-400 font-bold font-[Times]">
          Hey Foodies! Welcome to
        </span>
        <h1 className="text-5xl sm:text-6xl md:text-8xl w-fit my-6 px-3 md:my-8 bg-orange-600 rounded-xl shadow-md shadow-orange-600 pb-2 text-white font-semibold">
          Delish Foodz
        </h1>
        <span className="text-lg sm:text-xl md:text-2xl font-[cursive] text-orange-600">
          "Food that Delights, Delivered with Care. Order now and enjoy!"
        </span>
      </div>
      <div className="w-full md:w-1/2">
        <img
          className="block w-full h-auto rounded-lg"
          src="https://cdn.pixabay.com/photo/2024/02/16/20/13/burger-8578288_1280.jpg"
          alt=""
        />
      </div>
    </div>
  );
};

export default About;
