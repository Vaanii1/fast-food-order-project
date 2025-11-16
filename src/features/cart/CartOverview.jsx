import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getTotalCartPrice, getTotalCartQuantity } from "./cartSlice";
import { formatCurrency } from "../../utils/helpers";

function CartOverview() {
  //get the num of items in the cart
  const totalCartQuantity = useSelector(getTotalCartQuantity);

  //get the total price
  const totalCartPrice = useSelector(getTotalCartPrice);

  //if there's no item in the cart
  if (!totalCartQuantity) return null;

  return (
    <div className="flex items-center justify-between bg-slate-700 p-4 text-sm text-slate-200 uppercase sm:p-6 md:text-base">
      <p className="space-x-4 font-semibold sm:space-x-6">
        <span>{totalCartQuantity} Fast Food</span>
        <span>{formatCurrency(totalCartPrice)}</span>
      </p>
      <Link to="/cart">Open Cart &rarr;</Link>
    </div>
  );
}

export default CartOverview;
