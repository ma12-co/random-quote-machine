import React, { Component } from "react"
import { BrowserRouter, Route } from "react-router-dom"
import Home from "./Home"
import Settings from "./Settings"

import "./App.css"

class App extends Component {
  constructor() {
    super()
    this.state = {
      quotes: {},
      quote: "",
      author: ""
    }
    this.updateQuote = this.updateQuote.bind(this)
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

  render() {
    return (
      <BrowserRouter>
        <div>
          <Route
            path="/"
            exact
            render={props => (
              <Home
                updateQuote={this.updateQuote}
                quote={this.state.quote}
                author={this.state.author}
              />
            )}
          />
          <Route path="/settings" component={Settings} exact />
        </div>
      </BrowserRouter>
    )
  }
}

export default App
