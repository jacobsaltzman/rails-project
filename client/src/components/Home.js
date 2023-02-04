import React from "react";
import { Link } from 'react-router-dom';


function Home(){
  return (
    <div id="home">
      <div id="home-top-div"> 
      <h2>Welcome to the Instrument Library</h2>
      </div>

    <section id="home-middle-section">
      <div id="middle-logo-div">Logo goes here.
      </div>
    </section>

      <div id="home-bottom-div">
      <h5>Browse the <Link to="/instruments">instruments</Link> collection, hear what others have to say about their <Link to="/loans">experiences</Link>, or create your own <Link to="/signup">profile</Link> to join the musical sharing community and start loaning out instruments from the library yourself.</h5>
      </div>
    </div>
  )
}

export default Home;