import { useDispatch } from "react-redux";
import Button from "../../ui/Button";
import { deleteItem } from "./cartSlice";

function DeleteItem({ foodId }) {
  //to delete
  const dispatch = useDispatch();
  return (
    <Button type="small" onClick={() => dispatch(deleteItem(foodId))}>
      Delete
    </Button>
  );
}

export default DeleteItem;
