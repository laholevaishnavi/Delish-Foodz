import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Itemlist from "./Itemlist";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <>
      <h1 className="text-center font-semibold m-6 text-3xl text-gray-800">Cart</h1>
      <div className="w-full sm:w-10/12 md:w-8/12 lg:w-6/12 m-auto p-6 bg-white rounded-lg shadow-lg">
      {cartItems.length == 0 ? <h1>Your Cart is Empty</h1>:  <button
          onClick={handleClearCart}
          className="bg-rose-600 text-gray-100 font-semibold px-4 py-2 rounded-md shadow-md hover:bg-rose-700 focus:outline-none focus:ring-2 focus:ring-rose-500 transition duration-300 mb-6"
        >
          Clear Cart
        </button>}
      
        <Itemlist items={cartItems} />
      </div>
    </>
  );
};

export default Cart;
