import React from "react";
import { BrowserRouter as Router, Route, useRoutes } from "react-router-dom";

import HomePage from "./screens/HomePage";
import LoginPage from "./screens/Login";
import Dashboard from "./screens/Dashboard";
import RegisterPage from "./screens/Register";

// Import your page components here

const Routes = (props) =>
  useRoutes([
    {
      path: "/",
      element: <HomePage {...props} />,
    },
    {
      path: "/login",
      element: <LoginPage {...props} />,
    },
    {
      path: "/register",
      element: <RegisterPage {...props} />,
    },
    {
      path: "/dashboard",
      element: <Dashboard {...props} />,
    },
  ]);

export default Routes;
