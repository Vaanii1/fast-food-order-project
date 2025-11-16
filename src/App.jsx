import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./ui/Home";
import Error from "./ui/Error";
//the menu and menu loader
import Menu from "./features/menu/Menu";
import { loader as menuLoader } from "./features/menu/MenuLoader";
import Cart from "./features/cart/Cart";
//the order and order loader
import Order from "./features/order/Order";
import { loader as orderLoader } from "./features/order/OrderLoader";
//to create order and the action function wheb the form is created
import CreateOrder from "./features/order/CreateOrder";
import { action as createOrderAction } from "./features/order/CreateOrderAction";
import AppLayout from "./ui/AppLayout";
import { action as updateOrderAction } from "./features/order/UpdateOrderAction";

//define routes
//Applayout is the parent and layour route
//applayout as the parent of all routes in the app
//Each component will have a loader function which will load the data relating that that component
//provive the loader function to the route
//render on fetch- fetch and rendering are done at the same time
const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <Error />,

    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/menu",
        element: <Menu />,
        loader: menuLoader,
        errorElement: <Error />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/order/new",
        element: <CreateOrder />,
        action: createOrderAction,
      },
      {
        path: "/order/:orderId",
        element: <Order />,
        loader: orderLoader,
        errorElement: <Error />,
        action: updateOrderAction,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
