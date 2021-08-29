import React from 'react'
import { Link } from 'react-router-dom';
import "./Landing.css"

export default function Landing() {
  return (
    <div className="landing-img">
    <div className="landing-container">
    <div className="link-out">
      <img className="apex-logo"
        src="https://cdn.freebiesupply.com/images/large/2x/apex-legends-symbol-white.png">
      </img>
      <Link className="link-login" to='/login'>
        <button>
          Enter Site
        </button>
      </Link>
      <img className="apex-logo"
        src="https://cdn.freebiesupply.com/images/large/2x/apex-legends-symbol-white.png">
      </img>
    </div>
      </div>
      </div>
  )
}
