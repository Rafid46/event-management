/* eslint-disable no-unused-vars */
import { createBrowserRouter } from "react-router-dom";
import Root from "../MainLayout/Root";
import Home from "../Pages/HomePage/Home";
import Convention from "../Pages/Convention";
import About from "../Pages/About";
import Login from "../Pages/HomePage/Login";
import Register from "../Pages/HomePage/Register";
import ServiceCard from "../Pages/HomePage/ServiceCard";
import DetailCard from "../Pages/HomePage/DetailCard";
import PrivateRoute from "./PrivateRoute";
import Esports from "./Private route/Esports";
import Purchase from "./Private route/Purchase";

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
        path: "/purchase",
        element: (
          <PrivateRoute>
            <Purchase></Purchase>
          </PrivateRoute>
        ),
      },
      {
        path: "/esports",
        element: (
          <PrivateRoute>
            <Esports></Esports>
          </PrivateRoute>
        ),
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/Details/:id",
        element: (
          <PrivateRoute>
            <DetailCard></DetailCard>
          </PrivateRoute>
        ),
        loader: () => fetch("/Details.json"),
      },
    ],
  },
]);
export default routes;
