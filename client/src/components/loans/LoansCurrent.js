//import {useState} from 'react'
import LoanDeletion from './LoanDeletion'

export default function LoansCurrent( {currentLoans, setCurrentLoans, onEditInstrument} ) {



  function returnLoan(x){
  console.log(x)
  }

  function onDeleteLoan(deletedLoanId) {
    const updatedLoans = currentLoans.filter((loan) => loan.id !== deletedLoanId);
    setCurrentLoans(updatedLoans);
  }


  return (
    <div id='loans-current'>
      <h4>Current Loans</h4>
      {currentLoans.map((loan) => (
      <div className='current-loan' key={loan.id}>
        <LoanDeletion onEditInstrument={onEditInstrument} onDeleteLoan={onDeleteLoan} loan={loan}/>
        <h5> {loan.instrumentname} </h5>
        <p className='loan-began'>began on {loan.loan_began} </p>
          {loan.returned ? null : (
          <button onClick={() => returnLoan(loan.id)}>Return</button>
    )}
  </div>
))}

    </div>
  )
}
