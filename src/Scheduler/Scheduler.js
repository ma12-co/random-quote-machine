import React from "react"
import styled from "styled-components"

import HourBased from "./HourBased"
import DayBased from "./DayBased"

const SchedulerButton = styled.button`
  padding: 10px;
  color: ${props => (props.state.darkMode ? "white" : "blue")};
  border: ${props => (props.active ? "2px" : "0px")} solid ${props =>
  props.state.darkMode ? "white" : "blue"};
  }
`

export default function Scheduler(props) {
  let display
  if (props.state.scheduler.hourBased.display) {
    display = (
      <HourBased
        activateHourBasedScheduler={props.activateHourBasedScheduler}
        value={props.state.scheduler.hourBased.interval}
        state={props.state}
      />
    )
  } else if (props.state.scheduler.dayBased.display) {
    display = (
      <DayBased
        state={props.state}
        activateDayBasedScheduler={props.activateDayBasedScheduler}
      />
    )
  } else if (props.state.scheduler.off) {
    display = null
  }

  return (
    <div className="scheduler">
      <h3>⌛ Quote scheduler ⌛</h3>
      <div className="tabs">
        <span>
          <SchedulerButton
            active={props.state.scheduler.hourBased.display}
            state={props.state}
            onClick={props.displayHourBasedScheduler}
          >
            Hour Based
          </SchedulerButton>
          <SchedulerButton
            active={props.state.scheduler.dayBased.display}
            state={props.state}
            onClick={props.displayDayBasedScheduler}
          >
            Day based
          </SchedulerButton>
          <SchedulerButton
            active={props.state.scheduler.off}
            state={props.state}
            onClick={props.turnOffScheduler}
          >
            Off
          </SchedulerButton>
        </span>
        {display}
      </div>
    </div>
  )
}
