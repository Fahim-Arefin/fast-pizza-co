import React from "react";
import CreateUser from "../features/user/CreateUser";

function Home() {
  return (
    <div className="my-24">
      <h1 className="my-12 text-center text-4xl">
        The Best Pizza <br />
        <span className="text-2xl font-semibold text-yellow-500">
          Straight out of the oven, straight to you.
        </span>
      </h1>
      <CreateUser />
    </div>
  );
}

export default Home;
