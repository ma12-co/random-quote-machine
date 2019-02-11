import React from "react"

import Yes from "../svg/Yes"
import No from "../svg/No"

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
