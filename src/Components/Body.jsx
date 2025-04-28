import React from "react";
import { CDN_URL } from "../utils/constants";
const Body = (props) => {
  const { resData } = props;
  // const { loggedInUser } = useContext(UserContext);
  const { cloudinaryImageId, name, avgRating, cuisines, costForTwo, sla } =
    resData;
  // console.log(resData);

  return (
    <div className="resCard flex-col flex items-center w-64 rounded-lg leading-10 shadow-slate-500 shadow-xl">
      <img
        className="border w-56 h-52 rounded-lg"
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId}
      />
      <h4 className="font-bold py-4 text-lg">{name}</h4>
      <h3 className="text-xs font-semibold pb-2 ">{cuisines.join(", ")}</h3>
      <div className="text-xs font-bold my-3  mx-1">
        {" "}
        <span className="bg-green-600 rounded-md p-1">
          {avgRating} ★
        </span> | <span>{costForTwo}</span> | <span>{sla.slaString} </span>
      </div>
    </div>
  );
};

export default Body;
