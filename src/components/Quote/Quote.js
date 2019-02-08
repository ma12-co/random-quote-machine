import React from "react"
import "./Quote.css"
function Component(props) {
    return (
        <div className="quote">
            <h1 id="text">
           {props.quote}
          </h1>
          <h4 id="author">
           {props.author}
          </h4>
        </div>
        
    )
}


export default Component



