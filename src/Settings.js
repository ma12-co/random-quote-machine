import React from "react"
import styled from "styled-components"
import { Link } from "react-router-dom"
//import "./Settings.css"

import DarkMode from "./components//DarkMode"

export default function Settings(props) {
  return (
    <Layout>
      <div className="Settings">
        <DarkMode
          darkModeOn={props.darkModeOn}
          darkModeOff={props.darkModeOff}
          state={props.state}
        />

        <div className="scheduler">
          <h3>Quote scheduler</h3>
        </div>
        <div className="fullScreen">
          <h3>Fullscreen</h3>
        </div>
        <div className="exitButton">
          <Link to="/">
            <h1>X</h1>
          </Link>
        </div>
      </div>
    </Layout>
  )
}

const Layout = styled.div`
  .Settings {
    text-align: left;
    display: grid;
    font-size: calc(10px + 2vmin);
    height: 100vh;
    grid-template-columns: repeat(12, 1fr);
    grid-template-rows: repeat(12, 1fr);
    grid-template-areas:
      ". . . . . . . . . . . ."
      ". . . . . . . . . . x ."
      ". . d d d d d d d d . ."
      ". . d d d d d d d d . ."
      ". . f f f f f f f f . ."
      ". . f f f f f f f f . ."
      ". . s s s s s s s s . ."
      ". . s s s s s s s s . ."
      ". . . . . . . . . . . ."
      ". . . . . . . . . . . ."
      ". . . . . . . . . . . ."
      ". . . . . . . . . . . .";
  }

  .darkMode {
    grid-area: d;
  }

  .scheduler {
    grid-area: s;
  }

  .fullScreen {
    grid-area: f;
  }

  .exitButton {
    grid-area: x;
  }
`
