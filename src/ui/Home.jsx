import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <Link
      className="underline underline-offset-2 decoration-rose-500"
      to="/menu"
    >
      go to menu
    </Link>
  );
}

export default Home;
