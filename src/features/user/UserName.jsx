import React from "react";
import { useSelector } from "react-redux";

function UserName() {
  const userName = useSelector((state) => {
    return state.user.userName;
  });

  return (
    <div className="text-e hidden font-bold tracking-wide md:block">
      {userName}
    </div>
  );
}

export default UserName;
