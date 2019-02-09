import React from "react"

import QuoteButton from "./components/QuoteButton/QuoteButton.js"
import Quote from "./components/Quote/Quote.js"
import Footer from "./components/Footer/Footer.js"
import Social from "./components/Social/Social"

export default function Home(props) {
  return (
    <div className="App" id="quote-box">
      <Quote quote={props.quote} author={props.author} />
      <Social />
      <QuoteButton updateQuote={props.updateQuote} />
      <Footer />
    </div>
  )
}
