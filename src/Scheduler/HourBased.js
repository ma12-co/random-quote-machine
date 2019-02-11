import React from "react"
import styled from "styled-components"
import { ThemeProvider } from "styled-components"

const Scheduler = styled.div`
  border: 2px solid ${props => (props.state.darkMode ? "white" : "blue")}
  padding: 10px 20px 10px 20px;
  margin: 10px 0px 10px 0px;
`

export default function HourBased(props) {
  console.log(props.value)
  return (
    <Scheduler state={props.state}>
      <form>
        <h5>Your quote will be updated every</h5>
        <span>
          <h1>
            {" "}
            {props.value}
            {props.value == 1 ? " hour!" : " hours!"}
          </h1>
        </span>

        <input
          id="hourlyInterval "
          type="range"
          min="1"
          max="24"
          value={props.value}
          onChange={props.activateHourBasedScheduler}
        />
      </form>
      <h1 />
    </Scheduler>
  )
}
