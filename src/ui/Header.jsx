import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";
import UserName from "../features/user/UserName";
import CartLogo from "../features/cart/CartLogo";
import { useSelector } from "react-redux";

function Header() {
  const { totalQuantity } = useSelector(({ cart }) => ({
    totalQuantity: cart.cart.reduce((sum, item) => sum + item.quantity, 0),
  }));

  return (
    <div className="grid space-y-4 bg-yellow-500 px-12 py-5 text-center md:grid-cols-[1fr_1fr_1fr] md:items-center md:space-y-0">
      <Link to="/" className=" text-xl tracking-widest  lg:text-2xl">
        Fast React Pizza Co.
      </Link>
      <SearchOrder />
      <div className="flex items-center justify-center space-x-2">
        {totalQuantity > 0 ? <CartLogo count={totalQuantity} /> : ""}

        <UserName />
      </div>
    </div>
  );
}

export default Header;
