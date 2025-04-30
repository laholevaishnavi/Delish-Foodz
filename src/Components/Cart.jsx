import React from "react";
import { useSelector } from "react-redux";
import Itemlist from "./Itemlist";

// how to read cart items? useSelector!!

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);
  return (
    <>
      <h1 className="text-center font-semibold m-4 text-2xl">Cart</h1>
      <div className="w-6/12  m-auto text-center">
        <Itemlist className="" items={cartItems} />
      </div>
    </>
  );
};

export default Cart;
