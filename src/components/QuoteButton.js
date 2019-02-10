import React from "react"
import styled from "styled-components"

export default function QuoteButton(props) {
  return (
    <div className="quoteButton">
      <Button id="new-quote" onClick={props.updateQuote}>
        Get a new quote!
      </Button>
    </div>
  )
}

const Button = styled.button`
  color: 00063f;
  font-size: 16px;
  font-family: "Press Start 2P";
  background-color: #ffffff00;
  padding: 20px 20px 20px 20px;
  border-radius: 4px;
  border-color: #00063f;
`
