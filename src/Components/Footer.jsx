import React from "react";

const Footer = () => (
  <footer className=" text-gray-900  bg-transparent mt-4 bottom-0 font-medium text-center py-4 text-sm  shadow-lg">
    <p>
      Made with <span aria-label="love" role="img">❤️</span> by <span className="font-bold">Vaishnavi Lahole</span>
    </p>
    <p className="mt-1">
      <a
        href="https://github.com/laholevaishnavi/Delish-Foodz"
        target="_blank"
        rel="noopener noreferrer"
        className="underline  hover:text-black"
      >
        GitHub Repo
      </a>
    </p>
  </footer>
);

export default Footer;
