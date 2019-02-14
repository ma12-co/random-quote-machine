import React from "react"

export default function(props) {
  let quote = props.state.quote
  let author = props.state.author
  return (
    <div className="social">
      <a
        id="tweet-quote"
        href={`https://twitter.com/intent/tweet?hashtags=quotes&related=randomquotemachine&text=${quote +
          " - " +
          author}`}
        target="blank"
      >
        <i className="fab fa-twitter" />
        <h5>Tweet this quote</h5>
      </a>
    </div>
  )
}
