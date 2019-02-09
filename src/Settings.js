import React from "react"
import "./Settings.css"

import DarkMode from "./components/DarkMode/DarkMode"

function Settings(props) {
  return (
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
        <a href="/">
          <h1>X</h1>
        </a>
      </div>
    </div>
  )
}

export default Settings
