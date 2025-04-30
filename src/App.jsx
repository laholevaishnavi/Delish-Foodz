import "./App.css";
import { lazy } from "react";
import Header from "./Components/Header.jsx";
import Contact from "./Components/Contact.jsx";
import Footer from "./Components/Footer.jsx";
import About from "./Components/About.jsx";
import Cart from "./Components/Cart.jsx";
import Error from "./Components/Error.jsx";
// import Grocery from "./Components/Grocery.jsx";
import RestaurantMenu from "./Components/RestaurantMenu.jsx";
import BodyWrapper from "./Components/BodyWrapper.jsx";
import React, { Suspense } from "react";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import UserContext from "./utils/Usercontext";
import { Provider } from "react-redux";
import appStore from "./utils/appStore.js"

const PageLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex-grow">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

// Lazy loading, code splitting, chunking or dynamic bunduling of Grocery Component. 
//use of lazy loading?
const Grocery = lazy(() => import("./Components/Grocery.jsx"));

// Create the router with routes defined
const router = createBrowserRouter([
  {
    path: "/",
    element: <PageLayout />,
    errorElement: <Error />, // Specify the error element for this route
    children: [
      { index: true, element: <BodyWrapper /> }, // This will act as Default child route
      { path: "contact", element: <Contact /> },
      { path: "about", element: <About name={"Vaishnavi"} /> },
      { path: "/restaurants/:resId", element: <RestaurantMenu /> },
      { path: "cart", element: <Cart /> },
      {
        path: "grocery",
        element: (
          <Suspense fallback={<h1>Loading Data!!!!!!</h1>}>
            <Grocery />
          </Suspense>
        ),
      }, // Note: Changed to lowercase for consistency
    ],
  },

  { path: "*", element: <Error /> }, // Catch-all for errors
]);

function App() {
  return (
    <Provider store={appStore}>
    <UserContext.Provider value={{ loggedInUser: "Default User" }}>
      <RouterProvider router={router} />
    </UserContext.Provider>
    </Provider>
  );
}

export default App;
