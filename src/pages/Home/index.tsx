import React, { useLayoutEffect, useRef, useState } from "react"
import { renderToString } from "react-dom/server"
import HomeOne from "./HomeOne"
import styles from "./index.module.css"
import Content from "./Content"
import { useNavigate } from "react-router-dom"

const Home: React.FC = () => {
  // console.log(renderToString(<HomeOne />))
  const ref = useRef(null)
  const [num, setNum] = useState(0)
const navigate=useNavigate()
  return (
    <div>
      hello content{num}{" "}
      <button onClick={() => setNum((v) => v + 2)}>add 2</button>
      <div>
        <HomeOne></HomeOne>
      </div>
      <button onClick={()=>navigate("/one")}> navigate</button>
    </div>
  )
}
export default Home
