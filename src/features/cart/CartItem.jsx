import { formatCurrency } from "../../utils/helpers";
import DeleteItem from "./DeleteItem";
import UpdateQuantity from "./UpdateQuantity";

function CartItem({ item }) {
  const { pizzaId, name, quantity, totalPrice } = item;

  return (
    <li className="flex items-center justify-between py-4 ">
      <p>
        {quantity}&times; {name}
      </p>
      <div className="flex items-center space-x-2 md:space-x-10">
        <p>{formatCurrency(totalPrice)}</p>
        <UpdateQuantity id={pizzaId} quantity={quantity} />
        <DeleteItem id={pizzaId} />
      </div>
    </li>
  );
}

export default CartItem;
