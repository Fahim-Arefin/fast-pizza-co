import React from "react";
import { useNavigate, useRouteError } from "react-router-dom";

function Error() {
  const navigate = useNavigate();

  //if any error occur this hook will called and give error obj
  const error = useRouteError();
  //   console.log(error);
  //   error.data --> will get the no route matched error message
  //   error.message --> will get the fetching related error message
  return (
    <div>
      <h1>Something Went wrong 😥</h1>
      <span>{error.data || error.message}</span>
      <div>
        <button onClick={() => navigate(-1)}>&larr; go back</button>
      </div>
    </div>
  );
}

export default Error;
