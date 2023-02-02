import React, { useState } from 'react';



function InstrumentCard({instrument}){

  const [isSeen, setIsSeen] = useState(true);

  const { id, name, condition, description, image } = instrument;


  function handleIsSeen(e){
    setIsSeen(!isSeen)
  }

  return(
    <div className="instrument-card" id={id}>
      <div className="background"></div>
      <h1>{name}</h1>
      <img alt={name} src={image}></img>
      <h3>Current Status: {condition}</h3> 
      <p>Information about the {name}: {description}</p>
      
      <div>{isSeen?`Click to check out other member's experiences with the ${name}`:"Add loan details component here."}</div>
      <button onClick={handleIsSeen}>{isSeen? 'Experiences':'Less info'}</button>
      <div id='more-info'>
      </div>
      <div className="background"></div>
    </div>
  )
}

export default InstrumentCard;