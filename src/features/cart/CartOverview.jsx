import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { formatCurrency } from "../../utils/helpers";

function CartOverview() {
  const { totalPrice, totalQuantity } = useSelector(({ cart }) => ({
    totalPrice: cart.cart.reduce((sum, item) => sum + item.totalPrice, 0),
    totalQuantity: cart.cart.reduce((sum, item) => sum + item.quantity, 0),
  }));

  if (!totalQuantity) return;

  return (
    <div className="flex justify-between bg-stone-800 px-12 py-4 text-lg uppercase text-stone-200">
      <p className="space-x-10">
        <span>{totalQuantity}</span>
        <span>{formatCurrency(totalPrice)}</span>
      </p>
      <Link to="/cart">open cart &rarr;</Link>
    </div>
  );
}

export default CartOverview;
