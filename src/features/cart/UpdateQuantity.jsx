import React from "react";
import Button from "../../ui/Button";
import { useDispatch } from "react-redux";
import { decreaseItemQueantity, increaseItemQuantity } from "../../store";

function UpdateQuantity({ id, quantity }) {
  const dispatch = useDispatch();
  return (
    <div className="flex items-center space-x-2 md:space-x-4">
      <Button
        primary
        onClick={() => dispatch(decreaseItemQueantity(id))}
        className="px-3.5 py-1"
      >
        -
      </Button>
      <span>{quantity}</span>
      <Button
        primary
        onClick={() => dispatch(increaseItemQuantity(id))}
        className="px-3 py-1"
      >
        +
      </Button>
    </div>
  );
}

export default UpdateQuantity;
