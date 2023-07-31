import { Link } from "react-router-dom";

function CartOverview() {
  return (
    <div>
      <Link
        className="underline underline-offset-2 decoration-rose-500"
        to="/cart"
      >
        Go to Cart
      </Link>
    </div>
  );
}

export default CartOverview;
