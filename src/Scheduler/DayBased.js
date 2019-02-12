import React from "react"
import styled from "styled-components"

const Scheduler = styled.div`
  border: 2px solid ${props => (props.state.darkMode ? "white" : "blue")}
  padding: 10px 20px 10px 20px;
  margin: 10px 0px 10px 0px;
`
const TimeInput = styled.input.attrs({
  type: "time"
})`
  color: ${props => (!props.state.darkMode ? "blue" : "white")}
  border: 0px solid ${props => (!props.state.darkMode ? "blue" : "white")};
  background-color: ${props => (props.state.darkMode ? "blue" : "white")}
  border-radius: 15px;
  padding:20px
`

const SubmitButton = styled.button`
  background-color: transparent;
  color: ${props => (props.state.darkMode ? "white" : "blue")};
  border: ${props =>
    props.state.darkMode ? "2px solid white" : "2px solid blue"};
  padding: 10px 20px 10px 20px;
`

export default function HourBased(props) {
  console.log(props.value)
  return (
    <Scheduler state={props.state}>
      <form onSubmit={props.activateDayBasedScheduler}>
        <h5>Select a time in which you want the quote to update</h5>
        <span>
          <TimeInput
            state={props.state}
            type="time"
            minLength="1"
            maxLength="2"
          />
        </span>
        <SubmitButton state={props.state} type="submit">
          <h1>Start scheduler</h1>
        </SubmitButton>
      </form>
    </Scheduler>
  )
}
