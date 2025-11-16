import { updateOrder } from "../../services/apiRestaurant";

//action for updating form
export async function action({ request, params }) {
  //the form data
  const formData = await request.formData();
  //convert form data to object
  const data = Object.fromEntries(formData);
  console.log(data);
  // the order obj
  const orderObj = JSON.parse(data.order);
  const { orderPrice } = orderObj;
  //set the priority to true and update the priority price
  const updateData = { priority: true, priorityPrice: orderPrice * 0.2 };
  //the update order function
  await updateOrder(params.orderId, updateData);

  return null;
}
