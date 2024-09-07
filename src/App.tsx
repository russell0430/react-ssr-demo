import React from "react"
import routeObjects from "./routes"
import { useRoutes } from "react-router-dom"
const App: React.FC = () => {
  const routes = useRoutes(routeObjects)
  return routes
}

export default App
