import React from "react"
import styled from "styled-components"

import QuoteButton from "./components/QuoteButton.js"
import Quote from "./components/Quote.js"
import Footer from "./components/Footer.js"
import Social from "./components/Social"

export default function Home(props) {
  return (
    <Layout>
      <div className="App" id="quote-box">
        <Quote quote={props.quote} author={props.author} />
        <Social state={props.state} />
        <QuoteButton updateQuote={props.updateQuote} />
        <Footer />
      </div>
    </Layout>
  )
}

const Layout = styled.div`
  .App {
    text-align: center;
    display: grid;
    font-size: calc(10px + 2vmin);
    height: 100vh;
    grid-template-columns: repeat(12, 1fr);
    grid-template-rows: repeat(12, 1fr);
    grid-template-areas:
      ". . . . . . . . . . . ."
      ". q q q q q q q q q q ."
      ". q q q q q q q q q q ."
      ". q q q q q q q q q q ."
      ". q q q q q q q q q q ."
      ". q q q q q q q q q q ."
      ". q q q q q q q q q q ."
      ". q q q q q q q q q q ."
      ". s s s s s s s s s s ."
      ". b b b b b b b b b b ."
      ". . . . . . . . . . . ."
      ". f f f f f f f f f f .";
  }

  .quote {
    grid-area: q;
  }

  .social {
    grid-area: s;
  }

  .quoteButton {
    grid-area: b;
  }

  .footer {
    grid-area: f;
  }
`
