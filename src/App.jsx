import "./App.css";
import Header from "./Components/Header.jsx";
import Contact from "./Components/Contact.jsx";
import Footer from "./Components/Footer.jsx";
import About from "./Components/About.jsx";
import Cart from "./Components/Cart.jsx";
import Error from "./Components/Error.jsx";
import Grocery from "./Components/Grocery.jsx";
import RestaurantMenu from "./Components/RestaurantMenu.jsx";
import BodyWrapper from "./Components/BodyWrapper.jsx";
import React from "react";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import UserContext from "./utils/Usercontext";

const PageLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

// Create the router with routes defined
const router = createBrowserRouter([
  {
    path: "/",
    element: <PageLayout />,
    errorElement: <Error />, // Specify the error element for this route
    children: [
      { index: true, element: <BodyWrapper /> }, // Default child route
      { path: "contact", element: <Contact /> },
      { path: "about", element: <About name={"Vaishnavi"} /> },
      { path: "/restaurants/:resid", element: <RestaurantMenu /> },
      { path: "cart", element: <Cart /> },
      { path: "grocery", element: <Grocery /> }, // Note: Changed to lowercase for consistency
    ],
  },

  { path: "*", element: <Error /> }, // Catch-all for errors
]);

function App() {
  return (
    <UserContext.Provider value={{ loggedInUser: "Default User" }}>
      <RouterProvider router={router} />
    </UserContext.Provider>
  );
}

export default App;
