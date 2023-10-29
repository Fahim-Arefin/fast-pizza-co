import React from "react";
import CreateUser from "../features/user/CreateUser";
import { useSelector } from "react-redux";
import Button from "./Button";

function Home() {
  const userName = useSelector(({ user }) => user.userName);

  return (
    <div className="my-24 text-center">
      <h1 className="my-12 text-center text-4xl">
        The Best Pizza <br />
        <span className="text-2xl font-semibold text-yellow-500">
          Straight out of the oven, straight to you.
        </span>
      </h1>
      {userName ? (
        <Button to="/menu" className="px-4 py-3">
          continue ordering, {userName}
        </Button>
      ) : (
        <CreateUser />
      )}
    </div>
  );
}

export default Home;
