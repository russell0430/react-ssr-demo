import React, { ReactElement } from "react"
const Suspend: React.FC<{
  id?:string
  fallback?: React.ReactNode
  loading: boolean
  children: React.ReactNode
}> = ({ id,loading, children, fallback }) => {
  const element= (loading ? fallback || <div>404</div> : children) as ReactElement
  return  React.cloneElement(element,{...element.props,id})
}

export default Suspend
