import React from "react"

import Yes from "./Yes"
import No from "./No"

export default function DarkMode(props) {
  console.log(props.state.darkMode)
  return (
    <div className="darkMode">
      <h3>Dark Mode</h3>
      <Yes darkModeOn={props.darkModeOn} state={props.state} />
      <No darkModeOff={props.darkModeOff} state={props.state} />
    </div>
  )
}
