import { RouteObject, Navigate } from "react-router-dom"
import Home from "../pages/Home"
import PageOne from "../pages/PageOne"
import React from "react"
const routes: RouteObject[] = [
  {
    path: "/home",
    index: true,
    element: <Home />,
  },

  {
    path: "/one",
    element: <PageOne />,
  },

  {
    path: "*",
    element: <Navigate to="/home" />,
  },
]

export default routes
