import React from "react"
import styled from "styled-components"

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
        <h5>Your quote will be updated every day at</h5>
        <span>
          <input type="text" minLength="1" maxLength="2" />
          <h1>:</h1>
          <input type="text" minLength="1" maxLength="2" />
          <select>
            <option value="AM">AM</option>
            <option value="PM">PM</option>
          </select>
        </span>
      </form>
    </Scheduler>
  )
}
