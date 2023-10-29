import { formatCurrency } from "../../utils/helpers";

function OrderItem({ item, isLoadingIngredients, ingredients }) {
  const { quantity, name, totalPrice } = item;

  return (
    <li className="p-4 font-semibold tracking-wider">
      <div className="flex justify-between">
        <p className="">
          <div>
            <span>{quantity}&times;</span> {name}
          </div>
          <div className="text-sm italic">
            {isLoadingIngredients ? "loading..." : ingredients?.join(", ")}
          </div>
        </p>
        <p>{formatCurrency(totalPrice)}</p>
      </div>
    </li>
  );
}

export default OrderItem;
