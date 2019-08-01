import React from "react"
import "./style.css"

function Container(props) {

  return (
    <div id="border">
      <p>{props.pageTitle}</p>
      <div className={`container${props.fluid ? "-fluid" : ""}`} {...props} />
    </div>
  )
}


export default Container;