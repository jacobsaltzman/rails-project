
import React from "react";
import { useParams } from "react-router-dom";
import LoanCreation from "../loans/LoanCreation";

function InstrumentPage({instruments}){

  const {instrumentId} = useParams();
  const instrumentArr = instruments.filter((instr) => Number(instr.id) === Number(instrumentId))
  const instrument = instrumentArr[0];

  console.log(instrument)


  if (instrument) {
    const {name, condition, image, description} = instrument;
  
    return (
      <div className="individual-instrument-page">
        <h3>{name}</h3>
        <img alt="Instrument" src={image}></img>
        <h4>Status: {condition}</h4> 
        {condition === "Available"? <LoanCreation/>:"Not available for borrow."}
        <p>Details: {description}</p>
  
        <h4>Read the Experiences:</h4>
        <p>add the loan details</p>
      </div>
    );
  } else {
    return <p>Instrument not found. We're sorry for the inconvenience.</p>;
  }


}

export default InstrumentPage;
