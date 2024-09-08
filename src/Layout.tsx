import React from "react"
const Layout: React.FC<{
  header: React.ReactNode
  content: React.ReactNode
}> = (props) => {
  const { header, content } = props
  return (
    <div>
      <div id="header">{header}</div>
      <div>{content}</div>
    </div>
  )
}

export default Layout
