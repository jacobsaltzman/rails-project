import React from "react";
import { Link } from 'react-router-dom';


function Navigation( {errors, currentUser, setCurrentUser, handleDarkMode, isDarkMode} ){

  const handleLogout = () => {
    fetch('/logout', {
      method: 'DELETE'
    })
    setCurrentUser(false)
    };
  

  return(
    <header>
      
      <div className="navbar">
        <div id="signin-signout">
        
            {!currentUser ? <Link to="/login">Login</Link> : null}
            {!currentUser ? <Link to="/signup">Signup</Link> : null}
            <button onClick={handleDarkMode}>{isDarkMode? '☀️': '🌙'} </button>
            {errors?<h6 id="errors">{errors}. Sign up or Login to continue!</h6>:""}
            {currentUser ? <div><div id="user-greeting"><h6>Welcome, {currentUser.username}</h6></div>  <div id="logout-button"><button onClick={handleLogout}>Log Out</button> </div></div>: null}
            
        </div>

        <div id="nav-links">
        <Link to="/">Home</Link>
        <Link to="/instruments">Instruments</Link>
        <Link to="/loans">Experiences</Link>
        <Link to={`/members/${currentUser.id}`}>Account</Link>
        <Link to="/about">About&nbsp;Us</Link>
        </div>

      </div>
    </header>
  )
}

export default Navigation;