import React from "react"

import yes from "../svg/yes.svg"
import no from "../svg/no.svg"
import yes_selected from "../svg/yes_selected.svg"
import no_selected from "../svg/no_selected.svg"

export default function DarkMode(props) {
  console.log(props.state.darkMode)
  return (
    <div className="darkMode">
      <span>
        <h3>Dark Mode</h3>
        <img
          alt="darkmodeon"
          src={props.state.darkMode ? yes_selected : yes}
          onClick={props.darkModeOn}
        />
        <img
          alt="darkmodeoff"
          src={!props.state.darkMode ? no_selected : no}
          onClick={props.darkModeOff}
        />
      </span>
    </div>
  )
}
