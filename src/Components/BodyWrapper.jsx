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

      const restaurantsFromCard1 =
        data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants;
      const restaurantsFromCard2 =
        data?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants;

      const restaurants = restaurantsFromCard1 || restaurantsFromCard2 || [];

      setListOfRestaurant(restaurants);
      setFilteredRestaurant(restaurants);
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
//  console.log(listOfRestaurant);

  return (
    <>
    
    <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-9 items-center mx-4 sm:mx-10 my-4">
      <div className="w-full sm:w-auto border-slate-300 shadow-black rounded-md shadow-md flex">
        <input
          type="text"
          data-testid="searchInput"
          className="border-slate-400 rounded-l-md shadow-sm h-10 w-full px-3 focus:outline-none focus:ring-2 focus:ring-green-500"
          placeholder="Search restaurants..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button
          className="px-4 py-2 rounded-r-md bg-green-600 text-white font-semibold hover:bg-green-700 transition"
          onClick={handleSearch}
        >
          Search
        </button>
      </div>
      <div className="w-full sm:w-auto py-2 flex justify-center">
        <button
          className="px-6 py-2 h-10 bg-green-600 text-white rounded-md font-semibold hover:bg-green-700 transition"
          onClick={handleTopRated}
        >
          Top Rated Restaurants
        </button>
      </div>
    </div>
      <div className="restaurantContainer items-center  sm:mx-10 flex justify-center flex-wrap gap-6">
        {Array.isArray(filteredRestaurant) && filteredRestaurant.length > 0 ? (
          filteredRestaurant.map((restaurant) => (
            <Link to={`/restaurants/${restaurant?.info.id}`} key={restaurant?.info.id}>
              <Body resData={restaurant?.info} />
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
