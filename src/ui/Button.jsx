import { Link } from "react-router-dom";

function Button({ children, primary, secondary, ...rest }) {
  let primaryStyle = `rounded-full border-none bg-yellow-500 font-semibold uppercase tracking-wide
  transition-all duration-150 hover:bg-yellow-300 focus:outline-none focus:ring focus:ring-yellow-300 
  focus:ring-offset-2 active:bg-yellow-400 disabled:cursor-not-allowed disabled:bg-yellow-200 `;

  let secondaryStyle = `rounded-full border border-stone-300 bg-stone-200 font-semibold uppercase tracking-wide
  transition-all duration-150 hover:bg-stone-300 focus:outline-none focus:ring focus:ring-stone-300 
  focus:ring-offset-2 active:bg-stone-400 disabled:cursor-not-allowed disabled:bg-stone-200 `;

  //if button use as a link
  if (rest?.to) {
    return (
      <Link
        className={`rounded-full border-none bg-yellow-500 font-semibold uppercase tracking-wide
        transition-all duration-150 hover:bg-yellow-300 focus:outline-none focus:ring focus:ring-yellow-300 
        focus:ring-offset-2 active:bg-yellow-400 disabled:cursor-not-allowed disabled:bg-yellow-200 ${rest.className}`}
        to={rest.to}
      >
        {children}
      </Link>
    );
  }

  //primary button
  return (
    <div>
      <button
        {...rest}
        className={`${
          primary ? primaryStyle : secondary ? secondaryStyle : ""
        } ${rest.className}`}
      >
        {children}
      </button>
    </div>
  );
}

export default Button;
