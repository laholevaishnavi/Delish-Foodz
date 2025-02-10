import React from "react";
import { CDN_URL } from "../utils/constants";
const Body = (props) => {
  const { resData } = props;
  // const { loggedInUser } = useContext(UserContext);
  const {
    cloudinaryImageId,
      name,
      avgRating,
      cuisines,
      costForTwo,
      sla,
    } = resData;
   console.log(resData);
   
    return (
      <div className="resCard" >
        
        <img
          className="rounded-lg"
          alt="res-logo"
          src={CDN_URL + cloudinaryImageId}
        />
        <h3 className="font-bold py-4 text-lg">{name}</h3>
        <h4>{cuisines.join(", ")}</h4>
        <h4>{avgRating} stars</h4>
        <h4>{costForTwo}</h4>
        <h4>{ sla.slaString} </h4>
      </div>
    );
};

export default Body;
