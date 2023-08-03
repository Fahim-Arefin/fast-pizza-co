import React from "react";
import { Link } from "react-router-dom";

function LinkButton({ children, className, ...rest }) {
  return (
    <Link
      {...rest}
      className={`text-blue-500 hover:text-blue-600 hover:underline hover:underline-offset-4 ${className}`}
    >
      {children}
    </Link>
  );
}

export default LinkButton;
