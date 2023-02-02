import React from "react";
import { Link } from 'react-router-dom';


function Navigation( {currentUser, setCurrentUser, handleDarkMode, isDarkMode} ){

  const handleLogout = () => {
    fetch('/logout', {
      method: 'DELETE'
    })
    setCurrentUser(false)
    };
  
    console.log(currentUser)

  return(
    <header>
      
      <div className="navbar">
        <div id="nav-links">
        <Link to="/">Home</Link>
        <Link to="/instruments">Instruments</Link>
        <Link to="/loans">Experiences</Link>
        <Link to={`/members/${currentUser.id}`}>Account</Link>
        <Link to="/about">About&nbsp;Us</Link>
        </div>

        <div id="signin-signout">
          {!currentUser ? <Link to="/login">Login</Link> : null}
          {!currentUser ? <Link to="/signup">Signup</Link> : null}
          {currentUser ? <div><h6>Welcome, {currentUser.username}</h6>   <button onClick={handleLogout}>Log Out</button> </div>: null}
        </div>

        <div id="dark-button">
          <button onClick={handleDarkMode}>{isDarkMode? 'Lightmode ☀️': 'Darkmode 🌙'} </button>
        </div>

      </div>
    </header>
  )
}

export default Navigation;