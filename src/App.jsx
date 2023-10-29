import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Home from "./ui/Home";

//{ loader as menuLoader } rename technic
import Menu, { loader as menuLoader } from "./features/menu/Menu";
import { loader as orderLoader } from "./features/order/Order";
import { action as createOrderAction } from "./features/order/CreateOrder";
import { action as UpdateOrderAction } from "./features/order/UpdateOrder";

import Cart from "./features/cart/Cart";
import CreateOrder from "./features/order/CreateOrder";
import Order from "./features/order/Order";
import AppLayout from "./ui/AppLayout";
import Error from "./ui/Error";

//createBrowserRouter should be created  outside component
const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <Error />, //if any error occur related to path this Error component will run (not found route)
    //Nested Routes is inside the children arrays of obj (check doc)
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/menu",
        element: <Menu />,
        loader: menuLoader,
        //this error will caught fetching related error
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
        //this error will caught fetching related error
        errorElement: <Error />,
        action: UpdateOrderAction,
      },
    ],
  },
  //we will not have '*' route to catch no match like before. we will do it other way
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
