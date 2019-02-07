import React from "react"
import "./QuoteButton.css"

function QuoteButton(props) {
    return (
        <div> 
            <button className="quoteButton" onClick={props.updateQuote}>Get a new quote!</button>
        </div>
    )
} 

export default QuoteButton