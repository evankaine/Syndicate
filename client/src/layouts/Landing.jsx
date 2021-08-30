import React from 'react'
import { Link } from 'react-router-dom';
import "./Landing.css"

export default function Landing() {
  return (
  <div className="wrapper">
    <div className="landing-img">
      <div className="landing-container">
        <div className="link-out">
          <img className="apex-landing"
            src="https://i.imgur.com/U6u7aQX.png">
            </img>
          </div>
            <Link className="link-login" to='/legends'>
            <button>
              Enter Site
            </button>
          </Link>
      </div>
    </div>
  </div>
  )
}
