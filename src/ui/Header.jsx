import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";
import UserName from "../features/user/UserName";

function Header() {
  return (
    <div className="grid space-y-4 bg-yellow-500 px-12 py-5 text-center md:grid-cols-[1fr_1fr_1fr] md:items-center md:space-y-0">
      <Link to="/" className=" text-xl tracking-widest  lg:text-2xl">
        Fast React Pizza Co.
      </Link>
      <SearchOrder />
      <UserName />
    </div>
  );
}

export default Header;
