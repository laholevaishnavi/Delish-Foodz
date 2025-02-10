import React from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const { resId } = useParams();

  console.log(resId);

  const resInfo = useRestaurantMenu(resId);
  console.log(resInfo);
  

  if (resInfo === null) return <Shimmer />;
  const { name, city, cuisines, costForTwoMessage } =
    resInfo?.cards[2]?.card?.card?.info || {};


  // const { itemCards } =
  //   resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
  // console.log(itemCards);

  return (
    <div>
      <h1>{name}</h1>
      <p>{city}</p>
      <p>{cuisines}</p>
      <p>{costForTwoMessage}</p>
      {/* {itemCards.map((item) => (
        <li key={item.card.info.id}>
          {item.card.info.name}
          {"  " + item.card.info.price / 100 + " Rs"}
        </li>
      ))} */}
    </div>
  );
};

export default RestaurantMenu;
