import React from "react";
import Button from "../../ui/Button";
import { useDispatch } from "react-redux";
import { deleteItem } from "../../store";

function DeleteItem({ id }) {
  const dispatch = useDispatch();
  return (
    <Button
      primary
      className="px-4 py-1 text-sm"
      onClick={() => dispatch(deleteItem(id))}
    >
      delete
    </Button>
  );
}

export default DeleteItem;
