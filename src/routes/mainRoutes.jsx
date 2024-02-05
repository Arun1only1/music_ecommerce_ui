import MainLayout from "../layout/MainLayout";
import About from "../page/About";
import AddProduct from "../page/AddProduct";
import Home from "../page/Home";
import ProductList from "../page/ProductList";

export const mainRoutes = [
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "home",
        element: <Home />,
      },
      {
        path: "product/add",
        element: <AddProduct />,
      },
      {
        path: "product/list",
        element: <ProductList />,
      },
      {
        path: "about",
        element: <About />,
      },
    ],
  },
];
