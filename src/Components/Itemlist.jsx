import React from "react";
import { CDN_URL } from "../utils/constants";

const Itemlist = ({ items }) => {
  // console.log(items.card.info.name);

  return (
    <div>
      {items.map((item) => (
        <div className="flex p-6 justify-between items-center  border-2 border-black">
          <div className="w-4/6 text-left">
            <h1 className="font-medium ">{item.card.info.name}</h1>
            <p className="">{item.card.info.description}</p>
            <p>₹ {item.card.info.price ? item.card.info.price / 100 :  item.card.info.defaultPrice / 100 }.00 </p>
          </div>
          <div className="w-2/6 flex-col flex items-end justify-center">
            <img
              src={CDN_URL + item.card.info.imageId}
              alt="Image"
              className="w-3/5 rounded-lg shadow-lg shadow-slate-900 "
            />
            <button className="px-4 py-1 m-3 bg-slate-950 text-white rounded-lg ">
              Add To Cart{" "}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Itemlist;
