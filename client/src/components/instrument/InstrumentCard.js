import React from 'react';
import {Link} from 'react-router-dom'



function InstrumentCard({instrument}){


  const { id, name, condition, image } = instrument;


  return(
   
      <Link to={`/instruments/${id}`} className="instrument-card" id={id}>
 
      <img alt={name} src={image}></img>
      <h3 className='instrument-name'>{name}</h3>
      <div className="status">
      <h5 className='instrument-status'>Current Status:</h5>
      <h6 className={condition}>{condition} </h6> 
      </div>
      
      </Link>
      
  
  )
}

export default InstrumentCard;