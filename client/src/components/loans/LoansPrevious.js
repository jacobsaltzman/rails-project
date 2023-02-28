import React from "react";
import LoanEdit from "./LoanEdit";

export default function LoansPrevious( { setErrors, returnedLoans, onEditLoan, handleUpdateCurrentUser }) {

  


  return (
    <div id='loans-previous'>
      <h4>Previous Loans</h4>
      {returnedLoans.map((loan) => (
      <div className='loan-history' key={loan.id}>
        <h5>{loan.instrumentname}</h5>
        <p className='loan-began'>borrowed on: {loan.loan_began}</p>
        <p className='loan-experience'>your experience: </p>
        
          <LoanEdit handleUpdateCurrentUser={handleUpdateCurrentUser} setErrors={setErrors} onEditLoan={onEditLoan} loan={loan} />
        <p className='loan-updated'>(updated on: {loan.loan_updated})</p>
        
      </div>
    ))}
      </div>
  )
}
