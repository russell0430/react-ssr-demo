import React, { ReactNode } from "react"
import routeObjects from "./routes"
import { BrowserRouter, useRoutes } from "react-router-dom"

import Layout from "./Layout"

// const Router: React.FC<{ children: ReactNode }> = ({ children }) => {
//   return <BrowserRouter>{children}</BrowserRouter>
// }

const App: React.FC = () => {
  const routes = useRoutes(routeObjects)
  return routes
}

export default App
