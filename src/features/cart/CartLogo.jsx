import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from "react-router-dom";

const CartLogo = ({ count }) => {
  return (
    <Link to="/cart" className="relative inline-block">
      <AiOutlineShoppingCart className="text-4xl" />
      <span className="cart-count absolute bottom-5 left-5 rounded-full bg-red-500 px-2 py-1 text-xs text-white">
        {count}
      </span>
    </Link>
  );
};

export default CartLogo;
