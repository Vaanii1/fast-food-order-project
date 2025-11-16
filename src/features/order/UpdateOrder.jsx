import { useFetcher } from "react-router-dom";
import Button from "../../ui/Button";

function UpdateOrder({ order }) {
  //make order priority after placing order
  const fetcher = useFetcher();

  console.log(order);
  console.log(order.cart);
  console.log(fetcher);
  return (
    <fetcher.Form method="PATCH" className="text-right">
      <input type="hidden" name="order" value={JSON.stringify(order)} />
      <Button type="primary">Make Priority</Button>
    </fetcher.Form>
  );
}

export default UpdateOrder;
