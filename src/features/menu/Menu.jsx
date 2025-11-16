import { useLoaderData } from "react-router-dom";

import MenuItem from "./MenuItem";

function Menu() {
  //the menu data
  //render on fetch
  const menu = useLoaderData();
  //console.log(menu);
  return (
    <ul className="divide-y divide-blue-300 px-2">
      {menu.map((food) => (
        <MenuItem food={food} key={food.id} />
      ))}
    </ul>
  );
}

export default Menu;
