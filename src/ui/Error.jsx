import React from "react";
import { useNavigate, useRouteError } from "react-router-dom";
import LinkButton from "./LinkButton";

function Error() {
  const navigate = useNavigate();

  //if any error occur this hook will called and give error obj
  const error = useRouteError();
  //   console.log(error);
  //   error.data --> will get the no route matched error message
  //   error.message --> will get the fetching related error message
  return (
    <div className="flex min-h-screen items-start justify-center ">
      <div className="mt-44 h-auto w-full space-y-4 rounded-xl bg-rose-100 p-12 text-center text-rose-600 md:w-[70%] lg:w-[60%] xl:w-[50%]">
        <h1 className="text-4xl">Something Went wrong 😥</h1>
        <p className="text-2xl">{error.data || error.message}</p>
        <div>
          {/* <button onClick={() => navigate(-1)}>&larr; go back</button> */}
          <LinkButton onClick={() => navigate(-1)}>&larr; go back</LinkButton>
        </div>
      </div>
    </div>
  );
}

export default Error;
