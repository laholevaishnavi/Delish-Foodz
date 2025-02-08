import React, { useEffect, useState } from "react";
import Body from "./Body";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const BodyWrapper = () => {
  const [listOfRestaurant, setListOfRestaurant] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
      );
      const data = await response.json();
      // console.log(data);

      setListOfRestaurant(
        data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
      setFilteredRestaurant(
        data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleSearch = () => {
    const filteredRestaurant = listOfRestaurant.filter((res) =>
      res.info.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredRestaurant(filteredRestaurant);
  };

  const handleTopRated = () => {
    const filteredList = listOfRestaurant.filter(
      (res) => res.info.avgRating > 4
    );
    setFilteredRestaurant(filteredList);
  };

  return (
    <>
      <div className="search m-4 p-4">
        <input
          type="text"
          data-testid="searchInput"
          className="border border-solid border-black"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button
          className="px-4 py-2 bg-green-100 m-4 rounded-lg"
          onClick={handleSearch}
        >
          Search
        </button>
      </div>
      <div className="search m-4 p-4 flex items-center">
        <button
          className="px-4 py-2 bg-gray-100 rounded-lg"
          onClick={handleTopRated}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="BodyWrapper"></div>
      <div className="restaurantContainer">
        {Array.isArray(filteredRestaurant) && filteredRestaurant.length > 0 ? (
          filteredRestaurant.map((restaurant) => (
            <Link to={"/restaurants/" + restaurant?.info.id}>
              <Body resData={restaurant?.info} key={restaurant?.info.id} />
            </Link>
          ))
        ) : (
          <Shimmer />
        )}
      </div>
    </>
  );
};

export default BodyWrapper;
