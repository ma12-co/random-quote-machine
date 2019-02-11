import React from "react"
import styled from "styled-components"

import HourBased from "./HourBased"
import DayBased from "./DayBased"

const SchedulerButton = styled.button`
  padding: 10px;
  color: ${props => (props.state.darkMode ? "white" : "blue")};
  border: 0px;
  &:focus {
    border: 2px solid ${props => (props.state.darkMode ? "white" : "blue")};
  }
`

export default function Scheduler(props) {
  let display
  if (props.state.scheduler.hourBased.display) {
    display = <HourBased />
  } else if (props.state.scheduler.dayBased.display) {
    display = <DayBased />
  } else if (props.state.scheduler.off) {
    display = null
  }

  return (
    <div className="scheduler">
      <h3>Quote scheduler</h3>
      <div class="tabs">
        <span>
          <SchedulerButton
            state={props.state}
            onClick={props.displayHourBasedScheduler}
          >
            Hour Based
          </SchedulerButton>
          <SchedulerButton
            state={props.state}
            onClick={props.displayDayBasedScheduler}
          >
            Day based
          </SchedulerButton>
          <SchedulerButton state={props.state} onClick={props.turnOffScheduler}>
            Off
          </SchedulerButton>
        </span>
        {display}
      </div>
    </div>
  )
}
