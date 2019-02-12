//TODO:
//style the hour input field and change the design so it's more understandeable

import React, { Component } from "react"
import { BrowserRouter, Route } from "react-router-dom"
import styled from "styled-components"
import { ThemeProvider } from "styled-components"
import Fullscreen from "react-full-screen"

import "./global.css"
import Home from "./Home"
import Settings from "./Settings"

export default class App extends Component {
  constructor() {
    super()
    this.state = {
      quotes: {},
      quote: "",
      author: "",
      darkMode: true,
      fullScreen: false,
      scheduler: {
        hourBased: {
          display: false,
          active: false,
          interval: 1
        },
        dayBased: {
          display: false,
          active: false,
          time: null
        },
        off: true
      }
    }
    this.updateQuote = this.updateQuote.bind(this)
    this.darkModeOn = this.darkModeOn.bind(this)
    this.darkModeOff = this.darkModeOff.bind(this)
    this.fullScreenOn = this.fullScreenOn.bind(this)
    this.fullScreenOff = this.fullScreenOff.bind(this)
    this.displayHourBasedScheduler = this.displayHourBasedScheduler.bind(this)
    this.displayDayBasedScheduler = this.displayDayBasedScheduler.bind(this)
    this.activateHourBasedScheduler = this.activateHourBasedScheduler.bind(this)
    this.activateDayBasedScheduler = this.activateDayBasedScheduler.bind(this)
    this.turnOffScheduler = this.turnOffScheduler.bind(this)
  }

  componentDidMount() {
    //fetch data from the quotes api
    fetch(
      "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json"
    )
      .then(response => response.json())
      .then(response => {
        this.setState({
          quotes: response.quotes
        })
        //randomize the selection of a quote
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

  //this method updates the quote with another random quote, same logic as in componentDidMount lifecycle method
  updateQuote() {
    let random = Math.floor(Math.random() * this.state.quotes.length)
    let quote = this.state.quotes[random].quote
    let author = this.state.quotes[random].author
    this.setState({
      quote,
      author
    })
  }

  //sets the darkmode on
  darkModeOn() {
    this.setState({
      darkMode: true
    })
  }

  //sets the darkmode off
  darkModeOff() {
    this.setState({
      darkMode: false
    })
  }

  //sets fullscreen on with the react-full-screen
  fullScreenOn() {
    this.setState({
      fullScreen: true
    })
  }

  //sets fullscreen on with the react-full-screen
  fullScreenOff() {
    this.setState({
      fullScreen: false
    })
  }

  //displays the HourBased componentand takes out the
  displayHourBasedScheduler() {
    this.setState({
      scheduler: {
        hourBased: {
          display: true,
          active: true,
          interval: 1
        },
        dayBased: {
          display: false,
          active: false,
          time: null
        }
      }
    })
  }

  displayDayBasedScheduler() {
    this.setState({
      scheduler: {
        hourBased: {
          display: false
        },
        dayBased: {
          display: true
        }
      }
    })
  }

  //activates the hour based quote automatic update
  activateHourBasedScheduler(e) {
    e.persist()
    console.log(e.target.value)
    this.setState({
      scheduler: {
        hourBased: {
          display: true,
          active: true,
          interval: e.target.value
        },
        dayBased: {
          display: false,
          active: false,
          time: null
        },
        off: false
      }
    })
  }

  //activates the day based quote automatic update
  activateDayBasedScheduler(e) {
    e.persist()
    console.log(e.target.value)
    this.setState({
      scheduler: {
        hourBased: {
          display: false,
          active: false,
          interval: 1
        },
        dayBased: {
          display: true,
          active: true,
          time: e.target.value
        },
        off: false
      }
    })
  }

  //turns off the automatic updates of the quote
  turnOffScheduler() {
    this.setState({
      scheduler: {
        hourBased: {
          display: false
        },
        dayBased: {
          display: false
        }
      },
      off: true
    })
  }

  render() {
    //conditional logic for the darkMode

    return (
      <div>
        {/* fullscreen wrapper for react-full-screen */}
        <Fullscreen enabled={this.state.fullScreen}>
          {/* themeprovider that changes between light and dark depending on the state */}
          <ThemeProvider theme={this.state.darkMode ? DarkTheme : LightTheme}>
            <BrowserRouter>
              {/* applyes my global styles (at the bottom of the page) */}
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
                      fullScreenOn={this.fullScreenOn}
                      fullScreenOff={this.fullScreenOff}
                      state={this.state}
                      displayHourBasedScheduler={this.displayHourBasedScheduler}
                      displayDayBasedScheduler={this.displayDayBasedScheduler}
                      turnOffScheduler={this.turnOffScheduler}
                      activateHourBasedScheduler={
                        this.activateHourBasedScheduler
                      }
                    />
                  )}
                  exact
                />
              </GlobalStyles>
            </BrowserRouter>
          </ThemeProvider>{" "}
        </Fullscreen>
      </div>
    )
  }
}

//defines the themes for Themeprovider
const DarkTheme = {
  color: "white",
  backgroundColor: "blue"
}

const LightTheme = {
  color: "blue",
  backgroundColor: "white"
}

//these are my global styles that change according to the theme applied to an outer div that wraps all the app
const GlobalStyles = styled.div`
  color: ${props => props.theme.color};
  background-color: ${props => props.theme.backgroundColor};
  a {
    color: ${props => props.theme.color};
    &:hover {
      color: red;
    }
  }
`
