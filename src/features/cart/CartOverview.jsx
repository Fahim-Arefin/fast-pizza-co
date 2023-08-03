import { Link } from "react-router-dom";

function CartOverview() {
  return (
    <div className="flex justify-between bg-stone-800 px-12 py-4 text-lg uppercase text-stone-200">
      <p className="space-x-10">
        <span>23 pizzas</span>
        <span>$23.92</span>
      </p>
      <Link to="/cart">open cart &rarr;</Link>
    </div>
  );
}

export default CartOverview;
