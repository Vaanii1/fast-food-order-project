//the loader function with the menu data
//the loader fetching some data from an api

import { getMenu } from "../../services/apiRestaurant";

//provide the loader function the the menu route
export async function loader() {
  const menu = await getMenu();
  return menu;
}
