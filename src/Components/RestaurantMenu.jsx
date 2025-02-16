import React from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
  const { resId } = useParams();
// const dummy = "Dummy Data";
  console.log(resId);

  const resInfo = useRestaurantMenu(resId);
  console.log(resInfo);

  if (resInfo === null) return <Shimmer />;
  const {
    name,
    city,
    avgRating,
    totalRatingsString,
    cuisines,
    costForTwoMessage,
    sla,
  } = resInfo?.cards[2]?.card?.card?.info || {};

  const { itemCards } = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card || {};

  console.log(itemCards);

  const categories = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(

      (c) =>
        c.card?.["card"]?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  console.log(categories);

  return (
    <div className="text-center ">
      <h1>{name}</h1>
      <p>
        {avgRating} ⭐ ({totalRatingsString}) {costForTwoMessage}
      </p>
      <p>{city}</p>
      <p>{cuisines.join(", ")}</p>
      <p>{sla.slaString}</p>
      {/* {itemCards.map((item) => (
        <li key={item.card.info.id}>
          {item.card.info.name}
          {"  " + item.card.info.price / 100 + " Rs"}
        </li>
      ))} */}
      <div>
        {categories?.map((category) => (

          <RestaurantCategory
            key={category?.card?.card?.title}
            data={category?.card?.card}
            // showItems={index === showIndex ? true : false}
            // setShowIndex={() => setShowIndex(index)}
            // dummy={dummy}
          />
        ))} 
      </div>
    </div>
  );
};

export default RestaurantMenu;
