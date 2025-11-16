import { useFetcher, useLoaderData } from "react-router-dom";
import {
  calcMinutesLeft,
  formatCurrency,
  formatDate,
} from "../../utils/helpers";
import OrderItem from "./OrderItem";
import { useEffect } from "react";
import UpdateOrder from "./UpdateOrder";

//to display your order by the orderid
function Order() {
  //The order data
  const order = useLoaderData();
  console.log(order);
  //fetch data from another page without redirecting  there
  const fetcher = useFetcher();
  //get the menu ingredients
  useEffect(
    function () {
      if (!fetcher.data && fetcher.state === "idle") fetcher.load("/menu");
    },
    [fetcher],
  );

  console.log(fetcher.data);

  const {
    id,
    status,
    priority,
    priorityPrice,
    orderPrice,
    estimatedDelivery,
    cart,
  } = order;

  const deliveryIn = calcMinutesLeft(estimatedDelivery);

  return (
    <div className="space-y-8 px-4 py-6">
      <div className="flex flex-wrap items-center justify-between gap-2">
        {/* the order id  */}
        <h2 className="text-xl font-semibold">Order #{id} Status</h2>
        {/* check if it's a priority order  */}
        <div className="space-x-2">
          {priority && (
            <span className="rounded-full bg-red-500 px-3 py-1 text-sm font-semibold tracking-wide text-red-50 uppercase">
              Priority
            </span>
          )}
          {/* the order status  */}
          <span className="rounded-full bg-green-600 px-3 py-1 text-sm font-semibold tracking-wide text-green-50 uppercase">
            {status}
          </span>
        </div>
      </div>
      {/* display estimated delivery date  */}
      <div className="flex flex-wrap items-center justify-between gap-2 bg-blue-100 px-6 py-5">
        <p className="font-medium">
          {deliveryIn >= 0
            ? `Only ${calcMinutesLeft(estimatedDelivery)} minutes left.`
            : "Order should have arrived"}
        </p>
        <p className="text-sm text-stone-500">
          (Estimated delivery : {formatDate(estimatedDelivery)})
        </p>
      </div>

      {/* the food order  */}
      <ul className="borde divide-y divide-stone-300 border-t border-b border-stone-300">
        {/* map over each item in the cart which is the order item  */}
        {cart.map((item) => (
          <OrderItem
            item={item}
            isLoadingIngredients={fetcher.state === "loading"}
            ingredients={
              fetcher?.data?.find((el) => el.id === item.foodId)?.ingredients ??
              []
            }
            key={item.foodId}
          />
        ))}
      </ul>
      {/* the order details  */}
      <div className="space-y-2 bg-blue-100 px-6 py-5">
        <p className="text-sm font-medium text-stone-600">
          Fast Food Price: {formatCurrency(orderPrice)}
        </p>
        {priority && (
          <p className="text-sm font-medium text-stone-600">
            Priority Price : {formatCurrency(priorityPrice)}
          </p>
        )}
        <p className="font-bold">
          To pay on delivery : {formatCurrency(orderPrice + priorityPrice)}
        </p>
      </div>
      {/* to update a non-priority order to a priority order  */}
      {!priority && <UpdateOrder order={order} />}
    </div>
  );
}

export default Order;
