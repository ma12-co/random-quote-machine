import React from "react"
import { Link } from "react-router-dom"

export default function Footer() {
  return (
    <div className="footer">
      <span>
        <h5>
          a random quote machine by{" "}
          <a href="https://ma12.co" target="blank">
            ma12.co
          </a>
        </h5>
        <Link to="/settings">
          <h5>⚙ Settigns</h5>
        </Link>
      </span>
    </div>
  )
}
