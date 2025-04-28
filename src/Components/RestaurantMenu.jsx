import React, { useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { CDN_URL } from "../utils/constants";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);
  const [showIndex, setShowIndex] = useState(null);

  if (!resInfo) return <Shimmer />;

  // Try to get restaurant info from multiple possible cards for mobile and desktop
  const restaurantInfo =
    resInfo?.cards[2]?.card?.card?.info ||
    resInfo?.cards[3]?.card?.card?.info ||
    {};

  const {
    name,
    city,
    avgRating,
    totalRatingsString,
    cuisines,
    costForTwoMessage,
    sla,
    cloudinaryImageId,
  } = restaurantInfo;

  // Try to get categories from cards[4] or cards[5] for mobile and desktop
  const categories =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
      (c) =>
        c.card?.["card"]?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    ) ||
    resInfo?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
      (c) =>
        c.card?.["card"]?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    ) ||
    [];

  return (
    <div className="text-center mx-auto w-full sm:w-6/12 text-white px-4 sm:px-0">
      <div className="flex flex-col sm:flex-row justify-evenly bg-neutral-950 rounded-lg mb-8 p-4 sm:p-0">
        <div className="w-full sm:w-2/5 flex justify-center">
          <img
            className="w-48 h-36 sm:w-64 sm:h-44 object-cover shadow-lg shadow-slate-700 rounded-lg"
            src={CDN_URL + cloudinaryImageId}
            alt="image rendering fail"
          />
        </div>
        <div className="w-full sm:w-3/5 text-left text-gray-300 mt-4 sm:mt-0 leading-7">
          <h1 className="text-2xl sm:text-4xl text-white font-light">{name}</h1>
          <p>{city}</p>
          <p>
            {avgRating} ⭐| ({totalRatingsString}) | {costForTwoMessage}
          </p>
          <p>{cuisines?.join(", ")}</p>
          <p>{sla?.slaString}</p>
        </div>
      </div>

      <div>
        {categories.map((category, index) => (
          <RestaurantCategory
            key={category?.card?.card?.title || index}
            data={category?.card?.card}
            showItems={index === showIndex}
            setShowIndex={() => setShowIndex(index)}
            index={index}
          />
        ))}
      </div>
    </div>
  );
};

export default RestaurantMenu;
