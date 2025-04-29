import React from "react";
import { CDN_URL } from "../utils/constants";

const Itemlist = ({ items }) => {
  // console.log(items.card.info.name);

  return (
    <div>
      {items.map((item) => (
        <div className="flex flex-col sm:flex-row p-4 sm:p-6 justify-between items-start sm:items-center border-2 border-black mb-4">
          <div className="w-full sm:w-4/6 text-left mb-4 sm:mb-0">
            <h1 className="font-medium text-lg sm:text-xl">{item.card.info.name}</h1>
            <p className="text-sm sm:text-base">{item.card.info.description}</p>
            <p className="text-sm sm:text-base">
              ₹ {item.card.info.price ? item.card.info.price / 100 : item.card.info.defaultPrice / 100}.00
            </p>
          </div>
          <div className="w-full sm:w-2/6 flex flex-col items-start sm:items-end justify-center">
            <img
              src={CDN_URL + item.card.info.imageId}
              alt="Image"
              className="w-full sm:w-3/5 rounded-lg shadow-lg shadow-slate-900"
            />
            <button className="px-4 py-1 mt-3 bg-slate-950 text-white rounded-lg w-full sm:w-auto text-center">
              Add To Cart
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Itemlist;
