import React, { Component } from "react"
import { BrowserRouter, Route } from "react-router-dom"
import styled from "styled-components"
import { ThemeProvider } from "styled-components"

import "./global.css"
import Home from "./Home"
import Settings from "./Settings"

//defining the themes for Themeprovider
const DarkTheme = {
  color: "white",
  backgroundColor: "blue"
}

const LightTheme = {
  color: "blue",
  backgroundColor: "white"
}

export default class App extends Component {
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
      <div>
        <ThemeProvider theme={this.state.darkMode ? DarkTheme : LightTheme}>
          <BrowserRouter>
            <GlobalStyles>
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
            </GlobalStyles>
          </BrowserRouter>
        </ThemeProvider>{" "}
      </div>
    )
  }
}

const GlobalStyles = styled.div`
  color: ${props => props.theme.color};
  background-color: ${props => props.theme.backgroundColor};
  a {
    color: ${props => props.theme.color};
  }
`
