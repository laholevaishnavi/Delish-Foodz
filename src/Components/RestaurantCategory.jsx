import React, { useState } from "react";
import Itemlist from "./Itemlist";
const RestaurantCategory = ({ data, setShowIndex, showItems }) => {
  console.log(data);
const [showcategory,setshowcategory] = useState(false);
  const handleClick = () => {
    setShowIndex();
    setshowcategory(!showcategory)

  };
  return (
    <div className="text-center w-full text-white bg-gray-900 mx-auto px-4 sm:px-6 md:px-8 lg:px-10">
      <div className="max-w-7xl mx-auto">
        <div
          onClick={handleClick}
          className="flex cursor-pointer justify-between px-4 py-3 sm:px-6 md:px-8 lg:px-10 text-sm sm:text-base md:text-lg lg:text-xl"
        >
          <span>
            {data.title} - {data.itemCards.length} categories
          </span>
          <span>▼</span>
        </div>
        <div className="bg-slate-200 text-black">
          {showcategory && showItems && <Itemlist items={data.itemCards} />}
        </div>
      </div>
    </div>
  );
};

export default RestaurantCategory;
