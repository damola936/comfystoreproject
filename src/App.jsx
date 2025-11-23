import React from "react";
import {
  About,
  Cart,
  Checkout,
  Error,
  HomeLayout,
  Landing,
  Login,
  Orders,
  Products,
  Register,
  SingleProduct,
} from "./Pages";
import { ErrorElement } from "./components";
import { store } from "./utils/store";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

// LOADERS
import { loader as LandingLoader } from "./Pages/Landing";
import { loader as SingleProductLoader } from "./Pages/SingleProduct";
import { loader as ProductsLoader } from "./Pages/Products";
import { loader as CheckoutLoader } from "./Pages/Checkout";
import { loader as OrdersLoader } from "./Pages/Orders";
// ACTIONS
import { action as RegisterAction } from "./Pages/Register";
import { action as LoginAction } from "./Pages/Login";
import { action as CheckoutAction } from "./components/CheckoutForm";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5,
    },
  },
});

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Landing />,
        errorElement: <ErrorElement />,
        loader: LandingLoader(queryClient),
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/products",
        element: <Products />,
        loader: ProductsLoader(queryClient),
        errorElement: <ErrorElement />,
      },
      {
        path: "/products/:id",
        element: <SingleProduct />,
        loader: SingleProductLoader(queryClient),
        errorElement: <ErrorElement />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/checkout",
        element: <Checkout />,
        loader: CheckoutLoader(store),
        action: CheckoutAction(store, queryClient),
      },
      {
        path: "/orders",
        element: <Orders />,
        loader: OrdersLoader(store, queryClient),
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
    errorElement: <Error />,
    action: LoginAction(store),
  },
  {
    path: "/register",
    element: <Register />,
    errorElement: <Error />,
    action: RegisterAction,
  },
]);

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

export default App;
