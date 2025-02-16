import React from "react";

const RestaurantCategory = ({ data }) => {
  // const handleClick = () => {
  //   setShowIndex();
  // };
  return (
    <div>
      <div >
        <span>
          {data.title} ({data.itemCards.length})
        </span>
        <span>🔽</span>
      </div>
    </div>
  );
};

export default RestaurantCategory;
