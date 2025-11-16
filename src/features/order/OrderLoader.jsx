//the loader function with the specific order data
import { getOrder } from "../../services/apiRestaurant";

//params for the loader function in react
export async function loader({ params }) {
  const order = await getOrder(params.orderId);
  return order;
}
