
import React from "react";
import { useParams } from "react-router-dom";
import LoanCreation from "../loans/LoanCreation";

function InstrumentPage({instruments, currentUser, onEditInstrument, setErrors, onAddLoan}){

  const {instrumentId} = useParams();
  const instrumentArr = instruments.filter((instr) => Number(instr.id) === Number(instrumentId))
  const instrument = instrumentArr[0];
  

  if (instrument) {
    const {id, name, condition, image, description} = instrument;
    const loanArr = instrument.loans

    console.log(loanArr.length !==0)
  
    return (
      <div className="individual-instrument-page">
        <h3>{name}</h3>
        <img alt="Instrument" src={image}></img>
        <h5>Status: {condition}</h5> 
        {condition === "Available"? <LoanCreation onAddLoan={onAddLoan} setErrors={setErrors} id={id} currentUser={currentUser} onEditInstrument={onEditInstrument}/>:<h6>Not available for borrow. Check back later.</h6>}
        <h6>Details:</h6> <p>{description}</p>
  

        <div id="individual-instrument-experiences">
        <h4>Read the Experiences:</h4>
        {loanArr && loanArr.length !==0? loanArr.map((loan) =>  
        <ul>
        {loan.returned? <li>{loan.name} said - "{loan.experience}"</li> : <li>{loan.name} is borrowing this instrument currently.</li>}
        </ul>)
        :"No loan history."}
        </div>
      </div>
    );
  } else {
    return <p>Instrument not found. We're sorry for the inconvenience.</p>;
  }


}

export default InstrumentPage;
