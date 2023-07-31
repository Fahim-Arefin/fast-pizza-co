import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Home from "./ui/Home";
import Menu from "./features/menu/Menu";
import Cart from "./features/cart/Cart";
import CreateOrder from "./features/order/CreateOrder";
import Order from "./features/order/Order";
import AppLayout from "./ui/AppLayout";

//createBrowserRouter should be created  outside component
const router = createBrowserRouter([
  {
    element: <AppLayout />,
    //Nested Routes is inside the children arrays of obj (check doc)
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/menu",
        element: <Menu />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/order/new",
        element: <CreateOrder />,
      },
      {
        path: "/order/:orderId",
        element: <Order />,
      },
    ],
  },
  //we will not have '*' route to catch no match like before. we will do it other way
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
