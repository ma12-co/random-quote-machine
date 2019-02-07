import React, { Component } from "react";
import "./App.css";

import QuoteButton from "./components/QuoteButton/QuoteButton.js"
import Quote from "./components/Quote.js"



class App extends Component {
  constructor() {
    super()
    this.state = {
      loading : false,
      quotes : {},
      quote : "",
      author: ""
      
    }
    this.updateQuote = this.updateQuote.bind(this)
  }

  componentDidMount() { 
    fetch("https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json")
    .then(response => response.json())
    .then(response => {
      this.setState({
        quotes : response.quotes
      })
      let random = Math.floor(Math.random() * this.state.quotes.length)
      let quote = this.state.quotes[random].quote
      let author = this.state.quotes[random].author 
      this.setState({
        quote,
        author
    })
      
    })
    .catch(err => console.log("error while fetching, ",err)) 
    
  }
  


  updateQuote() {
      console.log(this.state.quotes)
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
      <div className="App">
          <header className="App-header">
          <Quote quote={this.state.quote} author={this.state.author} />
          <QuoteButton updateQuote={this.updateQuote} />
          </header>
      </div>
    )
  }
}


export default App;
