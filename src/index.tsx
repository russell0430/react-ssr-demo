import React from "react"
import ReactDOM from "react-dom"
import App from "./App"
import { BrowserRouter, Router } from "react-router-dom"
import HomeOne from "./pages/Home/HomeOne"
import { renderToString } from "react-dom/server"
// ReactDOM.render(
//   <React.StrictMode>
//     <BrowserRouter>
//       <App />
//     </BrowserRouter>
//   </React.StrictMode>,
//   document.getElementById("app")
// )
// console.log(renderToString(<HomeOne />))
ReactDOM.hydrate(<HomeOne />, document.getElementById("container"))
