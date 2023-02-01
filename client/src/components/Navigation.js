import React from "react";
import { Link } from 'react-router-dom';


function Navigation( {handleDarkMode, isDarkMode} ){


  return(
    <header>
      
      <div className="navbar">
        <div id="nav-links">
        <Link to="/instruments">Instruments</Link>
        <Link to="/loans">Experiences</Link>
        <Link to="/myloans">My Loans</Link>
        <Link to="/about">About&nbsp;Us</Link>
        <Link to="/login">Login</Link>
        <Link to="/signup">Signup</Link>
        </div>

        <div id="dark-button">
          <button onClick={handleDarkMode}>{isDarkMode? 'Lightmode ☀️': 'Darkmode 🌙'} </button>
        </div>

      </div>
    </header>
  )
}

export default Navigation;