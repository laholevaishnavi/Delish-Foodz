import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faTwitter,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

const Contact = () => {
  return (
    <div id="contact" className="max-h-full bg-gradient-to-r from-orange-100 via-yellow-100 to-orange-100 p-6 md:p-10 rounded-lg">

      <div className="font-semibold text-orange-700 text-center py-6 text-4xl md:text-5xl drop-shadow-md">
        <h1>Get in Touch</h1>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-evenly p-6 md:p-10 rounded-lg border border-orange-300 shadow-md bg-white">
        <div className="text-orange-700 md:w-1/2">
          <h1 className="text-base font-light text-center tracking-wide">More About Us</h1>
          <div className="flex justify-center gap-6 mt-5">
            <a
              href="https://www.linkedin.com/in/vaishnavi-lahole-a4665a281"
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange-500 hover:text-orange-700 transition-colors duration-300"
            >
              <FontAwesomeIcon icon={faLinkedin} size="2x" />
            </a>
            <a
              href="https://x.com/LaholeVaishnavi?s=09"
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange-500 hover:text-orange-700 transition-colors duration-300"
            >
              <FontAwesomeIcon icon={faTwitter} size="2x" />
            </a>
            <a
              href="https://github.com/laholevaishnavi"
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange-500 hover:text-orange-700 transition-colors duration-300"
            >
              <FontAwesomeIcon icon={faGithub} size="2x" />
            </a>
          </div>
        </div>
        <div className="md:w-1/2 rounded-lg border border-orange-300 mt-6 p-6 bg-orange-50 shadow-md md:mt-0">
          <h1 className="text-3xl text-orange-700 mb-6 font-semibold text-center drop-shadow-md">Contact Us</h1>
          <form className="flex flex-col gap-5">
            <div className="flex-col gap-1 justify-between">
              <input
                type="text"
                placeholder="Firstname"
                className="p-2 mb-2 w-full md:w-[48%] text-orange-700 rounded-lg border border-orange-600 focus:outline-none bg-transparent focus:ring-2 focus:ring-orange-700"
              />
              <input
                type="text"
                placeholder="Lastname"
                className="p-2 w-full mt-2 md:w-[48%] text-orange-700 rounded-lg border border-orange-600 focus:outline-none bg-transparent focus:ring-2 focus:ring-orange-700"
              />
            </div>
            <input
              type="email"
              placeholder="Email"
              className="p-2 rounded-lg border text-orange-700 border-orange-600 focus:outline-none bg-transparent focus:ring-2 focus:ring-orange-700"
            />
            <textarea
              placeholder="Your Message"
              rows="4"
              className="p-2 text-orange-700 rounded-lg border min-w-10 border-orange-600 focus:outline-none focus:ring-2 bg-transparent focus:ring-orange-700"
            />
            <button
              type="submit"
              className="bg-orange-700 hover:bg-orange-800 text-white font-bold py-2 px-4 rounded-lg"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
