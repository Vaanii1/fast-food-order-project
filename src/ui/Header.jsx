import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";
import Username from "../features/user/Username";

function Header() {
  return (
    <header className="flex items-center justify-between bg-blue-200 px-4 py-4 text-stone-600 uppercase sm:px-8">
      <Link to="/" className="font-semibold tracking-widest">
        Fast Food Order
      </Link>
      <SearchOrder />
      <Username />
    </header>
  );
}

export default Header;
