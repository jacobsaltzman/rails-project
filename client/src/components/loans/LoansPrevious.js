import {useState} from 'react'

export default function LoansPrevious( { returnedLoans }) {

  const [isEditMode, setIsEditMode] = useState(false);
  //const [editLoanId, setEditLoanId] = useState(null);


  console.log(returnedLoans)

  function handleEditMode(){
    setIsEditMode(!isEditMode)
  }

  return (
    <div id='loans-previous'>
      <h5>Previous Loans:</h5>
      {returnedLoans.map((loan) => (
      <div className='loan-history' key={loan.id}>
        <h5>{loan.instrumentname}</h5>
        <p>borrowed on: {loan.loan_began}</p>
        <p className='loan-experience'>your experience: "{loan.experience}"</p>
        <button onClick={() => handleEditMode()}>Edit</button>
        <p className='loan-updated'>updated on: {loan.loan_updated}</p>
        
      </div>
    ))}
      </div>
  )
}
