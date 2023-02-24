import React from 'react'



function LoanDeletion({ setErrors, loan, onDeleteLoan, updateInstrument }) {

  const {id, instrument_id} = loan
  
  const handleDeleteLoan = (e) => {
    e.preventDefault();
    

    fetch(`/loans/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      },
    })
      .then(res => {
        if (res.ok) {
          onDeleteLoan(id)
          updateInstrument(instrument_id)
        } else {
          throw new Error('Network response was not ok');
        }
      })
      .catch(error => {
        setErrors(error.message);
      })
     
  }
      

  
    return (
      <div className='loan-deletion'>
        <button className='delete-button' id={loan.id} type='submit' onClick={handleDeleteLoan}>X <span className="delete-tooltip">Delete hold before pickup!</span></button>
      </div>
    )
  

}

export default LoanDeletion;