import React, {useContext} from "react";
import { UserContext } from "../context/user";
import { Link } from 'react-router-dom';


function Home(){

  const {currentUser} = useContext(UserContext);
  

  return (
    <div id="home">
      <div id="home-top-div"> 
      <h2>Welcome to the Instrument Library</h2>
      </div>

    <section id="home-middle-section">
      <div id="middle-logo-div">
      </div>
    </section>

      <div id="home-bottom-div">
      {currentUser?<h5>{currentUser.username}</h5>:<h5>Become a <Link to="/signup">member</Link> or <Link to="/login">login</Link> to join the musical sharing community. From there</h5>}<h5>you can browse the instruments collection, hear what others have to say about their experiences, and start loaning out instruments from the library yourself for free. </h5>
      </div>
    </div>
  )
}

export default Home;