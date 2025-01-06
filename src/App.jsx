import { useEffect, useState } from "react";
import axios from "axios";
import Homepage from "./pages/Homepage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ProductDetail from "./pages/ProductDetail";
import ProductDetailArea from "./components/ProductDetailArea";
import Cart from "./pages/Cart";
import AllProduct from "./pages/AllProduct";
import Checkout from "./pages/Checkout";
import ConfirmOrder from "./pages/ConfirmOrder";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
  },
  {
    path: "/product/:id",
    element: <ProductDetail />,
  },
  {
    path: "/cart",
    element: <Cart />,
  },
  {
    path: "/product-page",
    element: <AllProduct />,
  },
  {
    path: "/checkout",
    element: <Checkout />,
  },
  {
    path: "/confirm",
    element: <ConfirmOrder />,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
