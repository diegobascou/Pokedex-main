import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import ErrorPage from "./Pages/Error-page";
import Root from "./Routes/Root";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import Pokecard from "./Pages/Stats/Card/Pokecard";
import Homepage from "./Pages/Home/Homepage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
  },
  { path: "detallePokemon/:name", element: <Pokecard /> },
  { path: "homepage", element: <Homepage /> },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
