import React, { useState } from "react"
import styles from "./index.module.css"
const Header: React.FC = () => {
  const [state, setState] = useState(0)
  return (
    <header  className={''}>
      <span>this is {state}</span>
      <button onClick={() => setState((v) => v + 1)}> click to add </button>
    </header>
  )
}

export default Header
