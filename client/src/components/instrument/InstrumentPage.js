
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
        <h5 className={condition}> {condition} </h5> 
        <div id="instrument-status">
        {condition === "Available"? <LoanCreation onAddLoan={onAddLoan} setErrors={setErrors} id={id} currentUser={currentUser} onEditInstrument={onEditInstrument}/>:<p>Not available for borrow. Check back later.</p>}
        </div>
        
        <div className="image-container">
        <img alt="Instrument" src={image}></img>
        </div>

   

      
        
        <div id="instrument-details">
        <h6>Details:</h6> <p>{description}</p>
        </div>
        

        <div id="individual-instrument-experiences">
        <h6>Read the Experiences:</h6>
        <ul>
        {loanArr && loanArr.length !==0 ? loanArr.map((loan) =>  
          <li key={loan.id}>
            {loan.returned ? (
              <span>{loan.name} said - "{loan.experience}" on ({loan.loan_updated})</span>
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
