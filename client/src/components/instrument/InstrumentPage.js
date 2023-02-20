
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

        <div id="instrument-status">
        <h5>Status: {condition}</h5> 
        {condition === "Available"? <LoanCreation onAddLoan={onAddLoan} setErrors={setErrors} id={id} currentUser={currentUser} onEditInstrument={onEditInstrument}/>:<h6>Not available for borrow. Check back later.</h6>}
        </div>

        <h3>{name}</h3>
        
        <div className="image-container">
        <img alt="Instrument" src={image}></img>
        </div>

        
        <div id="instrument-details">
        <h6>Details:</h6> <p>{description}</p>
        </div>
        

        <div id="individual-instrument-experiences">
        <h4>Read the Experiences:</h4>
        <ul>
        {loanArr && loanArr.length !==0 ? loanArr.map((loan) =>  
          <li key={loan.id}>
            {loan.returned ? (
              <span>{loan.name} said - "{loan.experience}"</span>
            ) : (
              <span>{loan.name} is borrowing this instrument currently.</span>
            )}
          </li>
        ) : (
          <li>No loan history.</li>
        )}
        </ul>
        </div>

      </div>
    );
  } else {
    return <p>Instrument not found. We're sorry for the inconvenience.</p>;
  }


}

export default InstrumentPage;
