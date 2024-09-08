import React, { useEffect, useState } from "react"
import Suspend from "../../components/Suspend"
import { mockFetch } from "../../mocks"
import styles from "./index.module.css"
const Content = () => {
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState("no data")
  useEffect(() => {
    mockFetch().then((resp) => {
      setData(resp.data)
      setLoading(false)
    })
  }, [])
  return (
    <Suspend  id="container" loading={loading} fallback={<div> now is loading</div>}>
      <div className={""} >
        <div>this is content </div>
        <div>now is {loading ? "loading" : "not Loading"}</div>
        <div>the data is {data}</div>
      </div>
    </Suspend>
  )
}

export default Content
