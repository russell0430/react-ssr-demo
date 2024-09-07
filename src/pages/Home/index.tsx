import React, { useLayoutEffect, useRef } from "react"
import { renderToString } from "react-dom/server"
import HomeOne from "./HomeOne"
import "./index.css"

const Home: React.FC = () => {
  console.log(renderToString(<HomeOne />))
  const ref = useRef(null)
  return (
    <div className="home" ref={ref}>
      <span>this is home</span>
      <div id="container">
        <HomeOne ref1={ref} />
      </div>
    </div>
  )
}
export default Home
