import BuyerProduct from "../page/BuyerProduct";
import Home from "../page/Home";

export const mainRoutes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/product/buyer",
    element: <BuyerProduct />,
  },
];
