import { Link } from "react-router-dom";

function Header() {
  return (
    <div>
      <Link className="underline underline-offset-2 decoration-rose-500" to="/">
        Fast React Pizza Co.
      </Link>
    </div>
  );
}

export default Header;
