import React from "react";
import { Link } from 'react-router-dom';


function Navigation(){


  return(
    <header>
      
      <div className="navbar">
        <div id="nav-links">
        <Link to="/instruments">Browse Instruments</Link>
        <Link to="/loans">Loan Feed</Link>
        <Link to="/myloans">My Loans</Link>
        <Link to="/about">About&nbsp;Us</Link>

        </div>

      </div>
    </header>
  )
}

export default Navigation;