import React from "react"
import ReactDOM from "react-dom"
import App from "./App"
import { BrowserRouter, Router } from "react-router-dom"
import HomeOne from "./pages/Home/HomeOne"
import { renderToString } from "react-dom/server"
import Content from "./pages/Home/Content"
import Header from "./components/Header"
import Layout from "./Layout"
import routes from "./routes"
ReactDOM.render(
  <React.StrictMode>
    <Layout
      header={<Header />}
      content={
        <BrowserRouter>
          <App />
        </BrowserRouter>
      }
    />
  </React.StrictMode>,
  document.getElementById("container")
)
console.log(renderToString(<Header />))
// console.log(renderToString(<HomeOne />))
ReactDOM.hydrate(<Header />, document.getElementById("header"))
ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("container")
)
