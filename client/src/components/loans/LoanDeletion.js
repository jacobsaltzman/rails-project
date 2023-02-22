import React, { useState } from 'react'



function LoanDeletion( {loan, onDeleteLoan} ){

  const {id, instrument_id} = loan
  const [errors, setErrors] = useState(false)



  
  const handleDeleteLoan = (e) => {
    e.preventDefault();
    

    fetch(`/loans/${id}`, {
        method: "DELETE",
        headers: {
        "Content-Type": "application/json"
        },
    })
    .then(res => {
      if(res.ok){
        onDeleteLoan(id)
      } else {
        res.json().then(data => setErrors(Object.entries(data.errors)))
      }
    })
}
 console.log(errors)



  
    return (
      <div className='loan-deletion'>
        <button className='delete-button' id={loan.id} type='submit' onClick={handleDeleteLoan}>X <span className="delete-tooltip">Delete hold before pickup!</span></button>
      </div>
    )
  

}

export default LoanDeletion