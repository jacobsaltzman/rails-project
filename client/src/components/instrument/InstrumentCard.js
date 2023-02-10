import React from 'react';
import {Link} from 'react-router-dom'



function InstrumentCard({instrument}){


  const { id, name, condition, image } = instrument;


  return(
    <div className="instrument-card" id={id}>
      <h3>{name}</h3>
      <img alt={name} src={image}></img>
      <div className="status">
      <h5>Current Status:</h5>
      <h6 className={condition}>{condition} </h6> 
      </div>
      <div id='more-info'>
      <Link to={`/instruments/${id}`}> More Info </Link>
      </div>
      
    </div>
  )
}

export default InstrumentCard;