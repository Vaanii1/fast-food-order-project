import { Link } from "react-router-dom";

function Button({ children, disabled, to, type, onClick }) {
  const base =
    "inline-block text-sm rounded-full bg-blue-300 font-semibold tracking-wide text-stone-800 uppercase transition-colors duration-300 hover:bg-blue-200 focus:ring focus:ring-blue-300 focus:ring-offset-3 focus:outline-none disabled:cursor-not-allowed";

  //object of styles
  const styles = {
    primary: base + " px-4 py-3 md:px-6 md:py-4",
    small: base + " px-4 py-2 md:px-5 md:py-2.5 text-xs",
    round: base + " px-2.5 py-1 md:px-3.5 md:py-2 text-sm",
    secondary:
      "inline-block text-sm rounded-full border-2 border-stone-400 font-semibold tracking-wide text-stone-800 uppercase transition-colors duration-300 hover:bg-stone-300 focus:bg-stone-400 focus:ring focus:ring-stone-400 focus:ring-offset-3 focus:outline-none disabled:cursor-not-allowed px-4 py-2.5 md:px-6 md:py-3.5",
  };
  // if there's a to prop
  if (to)
    return (
      <Link to={to} className={styles[type]}>
        {children}
      </Link>
    );

  if (onClick)
    return (
      <button onClick={onClick} disabled={disabled} className={styles[type]}>
        {children}
      </button>
    );
  return (
    <button disabled={disabled} className={styles[type]}>
      {children}
    </button>
  );
}

export default Button;
