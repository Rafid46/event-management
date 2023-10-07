/* eslint-disable no-unused-vars */
import { createBrowserRouter } from "react-router-dom";
import Root from "../MainLayout/Root";
import Home from "../Pages/HomePage/Home";
import Convention from "../Pages/Convention";
import About from "../Pages/About";
import Login from "../Pages/HomePage/Login";
import Register from "../Pages/HomePage/Register";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("/Details.json"),
      },
      {
        path: "/convention",
        element: <Convention></Convention>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
]);
export default routes;
