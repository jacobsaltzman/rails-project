import React from 'react'

export default function LoansPrevious( { returnedLoans }) {

  console.log(returnedLoans)

  function editLoan(x){
    console.log(x)
  }


  return (
    <div id='loans-previous'>
      <h5>Previous Loans:</h5>
      {returnedLoans.map((loan) => (
  <div key={loan.id}>
    {loan.experience} 
    <button onClick={() => editLoan(loan.id)}>Edit</button>
  </div>
))}
    </div>
  )
}
