import Button from "../../ui/Button";
import { formatCurrency } from "../../utils/helpers";

function CartItem({ item }) {
  const { pizzaId, name, quantity, totalPrice } = item;

  return (
    <li className="flex items-center justify-between py-4 ">
      <p>
        {quantity}&times; {name}
      </p>
      <div className="flex space-x-4">
        <p>{formatCurrency(totalPrice)}</p>
        <Button primary className="px-4 py-1 text-sm">
          delete
        </Button>
      </div>
    </li>
  );
}

export default CartItem;
