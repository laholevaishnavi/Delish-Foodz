import React, { useEffect, useState } from "react";
import Body from "./Body";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const BodyWrapper = () => {
  const [listOfRestaurant, setListOfRestaurant] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
      );

      if (!response.ok) {
        throw new Error(`Network response was not ok: ${response.status}`);
      }

      const data = await response.json();

      // Safely find the restaurant list in dynamic card structure
      const allCards = data?.data?.cards || [];
      const restaurantCard = allCards.find(
        (card) =>
          card?.card?.card?.gridElements?.infoWithStyle?.restaurants
      );

      const restaurants =
        restaurantCard?.card?.card?.gridElements?.infoWithStyle?.restaurants ||
        [];

      if (restaurants.length === 0) {
        setError("No restaurants found in the data.");
      }

      setListOfRestaurant(restaurants);
      setFilteredRestaurant(restaurants);
    } catch (error) {
      console.error("Error fetching data:", error);
      setError(error.message || "Error fetching data");
      setListOfRestaurant([]);
      setFilteredRestaurant([]);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = () => {
    const filtered = listOfRestaurant.filter((res) =>
      res.info.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredRestaurant(filtered);
  };

  const handleTopRated = () => {
    const filtered = listOfRestaurant.filter(
      (res) => parseFloat(res.info.avgRating) > 4
    );
    setFilteredRestaurant(filtered);
  };

  return (
    <>
      {/* Search and Top Rated Filter Section */}
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

      {/* Error Message and Retry */}
      {error && (
        <div className="text-center text-red-600 my-4">
          <p>Error: {error}</p>
          <button
            className="mt-2 px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition"
            onClick={fetchData}
          >
            Retry
          </button>
        </div>
      )}

      {/* Restaurant Cards Section */}
      <div className="restaurantContainer items-center sm:mx-10 flex justify-center flex-wrap gap-6">
        {loading ? (
          <Shimmer />
        ) : Array.isArray(filteredRestaurant) && filteredRestaurant.length > 0 ? (
          filteredRestaurant.map((restaurant) => (
            <Link to={`/restaurants/${restaurant?.info.id}`} key={restaurant?.info.id}>
              <Body resData={restaurant?.info} />
            </Link>
          ))
        ) : (
          !error && <p className="text-center w-full">No restaurants to display.</p>
        )}
      </div>
    </>
  );
};

export default BodyWrapper;
