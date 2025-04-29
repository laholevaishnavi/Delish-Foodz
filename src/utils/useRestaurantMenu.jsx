import { useEffect, useState } from "react";
import { SWIGGY_MENU_API_URL } from "../utils/constants";

const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchData();
  }, [resId]);


  const fetchData = async () => {
    try {
      const response = await fetch(SWIGGY_MENU_API_URL + resId);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const json = await response.json();
      setResInfo(json.data);
    } catch (error) {
      console.error("Error fetching restaurant menu:", error);
      setResInfo(null);
    }
  };

  return resInfo;
};

export default useRestaurantMenu;
