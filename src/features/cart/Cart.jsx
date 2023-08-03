import React from "react";
import Button from "../../ui/Button";
import LinkButton from "../../ui/LinkButton";
import CartItem from "./CartItem";

const fakeCart = [
  {
    pizzaId: 12,
    name: "Mediterranean",
    quantity: 2,
    unitPrice: 16,
    totalPrice: 32,
  },
  {
    pizzaId: 6,
    name: "Vegetale",
    quantity: 1,
    unitPrice: 13,
    totalPrice: 13,
  },
  {
    pizzaId: 11,
    name: "Spinach and Mushroom",
    quantity: 1,
    unitPrice: 15,
    totalPrice: 15,
  },
];

function Cart() {
  const cart = fakeCart;

  return (
    <div className="mx-6 my-12 space-y-10 text-xl md:mx-auto md:w-[90%] lg:w-[70%]">
      <LinkButton className="text-lg" to="/menu">
        &larr; back to menu
      </LinkButton>
      <h2 className="font-bold">Your cart %name%</h2>

      <ul className="divide-y-2">
        {cart.map((item) => (
          <CartItem item={item} key={item.pizzaId} />
        ))}
      </ul>

      <div className="flex space-x-5 text-lg">
        <Button to="/order/new">order pizza</Button>
        <Button secondary className="px-4 py-2">
          clear cart
        </Button>
      </div>
    </div>
  );
}

export default Cart;
