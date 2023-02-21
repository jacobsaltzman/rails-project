import React from 'react'

export default function LoansCurrent( {currentLoans} ) {

  function returnLoan(x){
  console.log(x)
  }

  console.log(currentLoans)

  return (
    <div id='loans-current'>
      <h4>Current Loans</h4>
      {currentLoans.map((loan) => (
      <div className='current-loan' key={loan.id}>
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
