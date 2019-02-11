import React from "react"
import FullYes from "./FullYes"
import FullNo from "./FullNo"

export default function FullScreenMode(props) {
  return (
    <div className="fullScreen">
      <h3>Fullscreen</h3>
      <FullYes state={props.state} fullScreenOn={props.fullScreenOn} />
      <FullNo state={props.state} fullScreenOff={props.fullScreenOff} />
    </div>
  )
}
