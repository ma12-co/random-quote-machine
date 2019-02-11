import React from "react"
import styled from "styled-components"

const YesButton = styled.button`
  background-color: transparent;
  border: ${props =>
    props.state.fullScreen
      ? `2px solid ${props.state.darkMode ? "white" : "blue"}`
      : "0px"};
  padding: 0px 3px 0px 3px;
`
const YesIcon = styled.path`
  fill: ${props => (!props.state.darkMode ? "blue" : "white")};
`

export default function FullYes(props) {
  return (
    <YesButton state={props.state} onClick={props.fullScreenOn}>
      <svg
        width="39"
        height="39"
        viewBox="0 0 39 39"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <YesIcon
          state={props.state}
          d="M14.4284 28V25.2H11.7143V22.4H9V19.6H14.4286V22.4L15.7856 22.4L15.7856 25.2H17.1427H18.4999V22.4H19.857V19.6H22.5713V16.8H25.2855V14H30.7141V16.8H27.9998V19.6H25.2855V22.4H22.5713L22.5713 25.2H19.857V28H14.4284Z"
          fill="#0000FF"
        />
      </svg>
    </YesButton>
  )
}
