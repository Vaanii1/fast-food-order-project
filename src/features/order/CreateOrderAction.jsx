import { redirect } from "react-router-dom";
import { calcMinutesLeft } from "../../utils/helpers";
import store from "../../store";
import { clearCart } from "../cart/cartSlice";
import { createOrder } from "../../services/apiRestaurant";
// https://uibakery.io/regex-library/phone-number
const isValidPhone = (str) =>
  /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(
    str,
  );

// get order status
function getOrderStatus() {
  //calculate the delivery date
  const estimatedDelivery = calcDeliveryDate();

  const deliveryInMinutes = calcMinutesLeft(estimatedDelivery);

  const deliveryInDays = deliveryInMinutes / (24 * 60);

  return `Order is Shipping and will be delivered in ${Math.round(deliveryInDays)} days`;
}
//calculate delivery date
function calcDeliveryDate() {
  const todaysDate = new Date();
  todaysDate.setDate(todaysDate.getDate() + 3);

  const deliveryDate = todaysDate.toISOString();

  return deliveryDate;
}

//action function is called to pass the request when the form is submitted
export async function action({ request }) {
  //the form data
  const formData = await request.formData();
  //convert form data to object
  const data = Object.fromEntries(formData);
  //console.log(data);

  //get the total price
  //the the cart state from the store
  const state = store.getState();
  const totalCartPrice = state.cart.cart.reduce(
    (sum, item) => sum + item.totalPrice,
    0,
  );

  //the order object
  const order = {
    ...data,
    priority: data.priority === "true",
    estimatedDelivery: calcDeliveryDate(),
    status: getOrderStatus(),
    cart: JSON.parse(data.cart),
    orderPrice: totalCartPrice,
    priorityPrice: data.priority === "true" ? totalCartPrice * 0.2 : 0,
  };
  //error object
  const errors = {};
  //if the number isn't
  if (!isValidPhone(order.phone))
    errors.phone =
      "Please give us a valid phone number in case there's a need to contact you.";

  //return the errors object if there is an error in it
  if (Object.keys(errors).length > 0) return errors;

  //create the order
  const newOrder = await createOrder(order);

  console.log(order);
  console.log(newOrder);
  console.log(newOrder[0].id);

  //clear the cart after order submission
  store.dispatch(clearCart());
  // //go to the new order
  return redirect(`/order/${newOrder[0].id}`);
}

export default action;
