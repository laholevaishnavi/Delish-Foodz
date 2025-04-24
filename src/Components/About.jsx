import React from "react";

const About = () => {
  return (
    <div className="flex leading-10 px-20  border-black  my-10 border-b-2 pb-10 items-center">
      <div className="w-1/2">
        <span className="text-6xl text-orange-400 font-bold font-[Times]">Hey Foodies! Welcome to</span>
        <h1 className="text-8xl w-fit  my-8 bg-orange-600 rounded-xl shadow-md  shadow-orange-600 pb-2 text-white font-semibold">Delish Foodz</h1>
        <span className="text-2xl font-[cursive]  text-orange-600   "> "Food that Delights, Delivered with Care. Order now and enjoy!"

</span>
      </div>
      <div className=" w-1/2">
        <img
        className="float-left w-full h-full"
          src="https://media.istockphoto.com/id/2067663848/photo/indian-baked-roti-prata-canai-2-pieces-with-spicy-chilli-curry-chicken-gravy-soup-sauce-in.jpg?s=612x612&w=0&k=20&c=30YNF4BOIwzg6zStNJv8Cig4-rKZLPmHMNI3XuAxPtM="
          alt=""
        />
      </div>
    </div>
  );
};

export default About;
