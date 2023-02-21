import React from 'react'

export default function LoansCurrent( {currentLoans} ) {

  function returnLoan(x){
  console.log(x)
  }


  return (
    <div id='loans-current'>
      <h5>Current Loans:</h5>
      {currentLoans.map((loan) => (
      <div key={loan.id}>
          {loan.experience} 
          {loan.returned ? null : (
          <button onClick={() => returnLoan(loan.id)}>Return</button>
    )}
  </div>
))}

    </div>
  )
}
