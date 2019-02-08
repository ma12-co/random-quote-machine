import React from "react"
import "./QuoteButton.css"

function QuoteButton(props) {
    return (
        <div className="quoteButton"> 
            <button id="new-quote" className="quoteButton" onClick={props.updateQuote}>Get a new quote!</button>
        </div>
    )
} 

export default QuoteButton