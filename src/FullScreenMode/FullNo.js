import React from "react"
import styled from "styled-components"

const NoButton = styled.button`
  background-color: transparent;
  border: ${props =>
    props.state.fullScreen
      ? "0px"
      : `2px solid ${!props.state.darkMode ? "blue" : "white"}`};
  padding: 0px 3px 0px 3px;
`
const NoIcon = styled.path`
  fill: ${props => (!props.state.darkMode ? "blue" : "white")};
`

export default function FullNo(props) {
  return (
    <NoButton state={props.state} onClick={props.fullScreenOff}>
      <svg
        width="39"
        height="39"
        viewBox="0 0 39 39"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <NoIcon
          state={props.state}
          d="M10 27.5V24.7H12.7143V21.9H15.4286V19.1H12.7143V16.3H10V13.5H15.4286V16.3H18.1429V19.1H20.8571V16.3H23.5714V13.5H29V16.3H26.2857V19.1H23.5714V21.9H26.2857V24.7H29V27.5H23.5714V24.7H20.8571V21.9H18.1429V24.7H15.4286V27.5H10Z"
          fill="white"
        />
      </svg>
    </NoButton>
  )
}
