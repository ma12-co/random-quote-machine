import React, { Component } from "react"
import { BrowserRouter, Route } from "react-router-dom"
import styled from "styled-components"

import Home from "./Home"
import Settings from "./Settings"

class App extends Component {
  constructor() {
    super()
    this.state = {
      quotes: {},
      quote: "",
      author: "",
      darkMode: true,
      fullScreen: false
    }
    this.updateQuote = this.updateQuote.bind(this)
    this.darkModeOn = this.darkModeOn.bind(this)
    this.darkModeOff = this.darkModeOff.bind(this)
    this.fullScreenOn = this.fullScreenOn.bind(this)
    this.fullScreenOff = this.fullScreenOff.bind(this)
  }

  componentDidMount() {
    fetch(
      "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json"
    )
      .then(response => response.json())
      .then(response => {
        this.setState({
          quotes: response.quotes
        })
        let random = Math.floor(Math.random() * this.state.quotes.length)
        let quote = this.state.quotes[random].quote
        let author = this.state.quotes[random].author
        this.setState({
          quote,
          author
        })
      })
      .catch(err => console.log("error while fetching, ", err))
  }

  updateQuote() {
    let random = Math.floor(Math.random() * this.state.quotes.length)
    let quote = this.state.quotes[random].quote
    let author = this.state.quotes[random].author
    this.setState({
      quote,
      author
    })
  }

  darkModeOn() {
    this.setState({
      darkMode: true
    })
  }

  darkModeOff() {
    this.setState({
      darkMode: false
    })
  }

  fullScreenOn() {
    this.setState({
      fullScreen: true
    })
  }

  fullScreenOff() {
    this.setState({
      fullScreen: false
    })
  }

  render() {
    //conditional logic for the darkMode

    return (
      <BrowserRouter>
        <GlobalStyles>
          <div>
            <Route
              path="/"
              exact
              render={() => (
                <Home
                  updateQuote={this.updateQuote}
                  quote={this.state.quote}
                  author={this.state.author}
                />
              )}
            />
            <Route
              path="/settings"
              render={() => (
                <Settings
                  darkModeOn={this.darkModeOn}
                  darkModeOff={this.darkModeOff}
                  state={this.state}
                />
              )}
              exact
            />
          </div>
        </GlobalStyles>
      </BrowserRouter>
    )
  }
}

export default App

const GlobalStyles = styled.div`

  margin: 0;
  padding: 0;
  font-family: -apple-system, BlinkMacSystemFont, "Press Start 2P", "Roboto",
    "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
    background-color: #3f1779;
        color: white;

a {color:white;}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
    monospace;
}

h1 {
  font-size: 1em;
  line-height: 1.3em;const
}

h2 {
  font-size: 0.8em;
}

h3 {
  font-size: 0.7em;
}

h4 {
  font-size: 0.6em;
  line-height: 1em;
}

h5 {
  font-size: 0.5em;
}

.Footer {
  color: red;
  background-color: aliceblue;
}

a {
  font-family: "Press Start 2P";
}

a:hover {
  color: red;
}
`
