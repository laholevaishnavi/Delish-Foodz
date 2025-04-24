import React, { useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { CDN_URL } from "../utils/constants";

const RestaurantMenu = () => {
  const { resId } = useParams();
  // const dummy = "Dummy Data";
  // console.log(resId);

  const resInfo = useRestaurantMenu(resId);
  // console.log(resInfo);
    const [showIndex,setShowIndex] = useState("")
  

  if (resInfo === null) return <Shimmer />;
  const {
    name,
    city,
    avgRating,
    totalRatingsString,
    cuisines,
    costForTwoMessage,
    sla,
    cloudinaryImageId,
  } = resInfo?.cards[2]?.card?.card?.info || {};

  // const { itemCards } =
  //   resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
  //     ?.card || {};

  // console.log(itemCards);

  const categories =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.["card"]?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  // console.log(categories);

  return (
    <div className="text-center   mx-auto w-6/12 text-white">
      <div className="flex justify-evenly bg-neutral-950 rounded-lg mb-8 ">
        {" "}
        <div className="w-2/5 ">
          <img
            className="w-64 h-44 object-cover  shadow-lg shadow-slate-700 rounded-lg m-5"
            src={CDN_URL + cloudinaryImageId}
            alt="image rendering fail"
          />
        </div>
        <div className="w-3/5 text-left text-gray-300 m-5 leading-7">
          <h1 className="text-4xl  text-white font-light">{name}</h1>
          <p >{city}</p>
          <p >
            {avgRating} ⭐| ({totalRatingsString}) | {costForTwoMessage}
          </p>

          <p>{cuisines.join(", ")}</p>
          <p>{sla.slaString}</p>
        </div>
      </div>
      
      <div >
        {categories?.map((category,index) => (
          <RestaurantCategory
            key={category?.card?.card?.title}
            data={category?.card?.card}
            showItems={index=== showIndex ? true : false}
            setShowIndex={()=>setShowIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default RestaurantMenu;
