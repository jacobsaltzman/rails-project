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
      <h3>{name}</h3>
      <img alt={name} src={image}></img>
      <h5>Current Status: {condition}</h5> 
      <div>{isSeen?"Click to find out more.":<div><p>Information about the {name}: {description}</p><p>Click to check out other member's experiences with the {name}</p></div>}</div>
      <button onClick={handleIsSeen}>{isSeen? 'More Info':'Less info'}</button>
      <div id='more-info'>
      </div>
      <div className="background"></div>
    </div>
  )
}

export default InstrumentCard;