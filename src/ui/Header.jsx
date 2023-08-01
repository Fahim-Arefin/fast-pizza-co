import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";

function Header() {
  return (
    <div>
      <Link className="underline underline-offset-2 decoration-rose-500" to="/">
        Fast React Pizza Co.
      </Link>
      <SearchOrder />
    </div>
  );
}

export default Header;
