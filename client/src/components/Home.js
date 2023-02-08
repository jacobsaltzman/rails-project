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
      <h5>Browse the instruments collection, hear what others have to say about their experiences, or become a <Link to="/signup">member</Link> to join the musical sharing community and start loaning out instruments from the library yourself.</h5>
      </div>
    </div>
  )
}

export default Home;