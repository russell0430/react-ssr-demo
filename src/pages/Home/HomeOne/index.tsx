import React, { useState } from "react"
import "./index.css"
const HomeOne: React.FC<{ ref1?: { current: HTMLDivElement | null } }> = ({
  ref1,
}) => {
  const [state, setState] = useState(0)
  return (
    <div
      className="home-one"
      ref={ref1}
      onClick={() => console.log("hello", state)}
    >
      <div
        className="home-one1"
        ref={ref1}
        onClick={() => setState((v) => v + 1)}
      >
        hello{state}
      </div>
    </div>
  )
}

export default HomeOne
