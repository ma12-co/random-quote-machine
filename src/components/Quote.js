import React from "react"

function Component(props) {
  return (
    <div
      className="quote"
      style={{ "overflow -y": "auto", "max-height": "100%" }}
    >
      <h1 id="text">“ {props.quote} ”</h1>
      <h4 id="author">{props.author}</h4>
    </div>
  )
}

export default Component
