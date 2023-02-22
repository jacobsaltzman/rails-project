import React, { useState } from 'react'



function LoanDeletion({ loan, onDeleteLoan, onEditInstrument }) {

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
        if (res.ok) {
          onDeleteLoan(id)
          return fetch(`/instruments/${instrument_id}`, {
            method: 'PATCH',
            body: JSON.stringify({ condition: 'Available' }),
            headers: {
              'Content-Type': 'application/json'
            }
          })
        } else {
          throw new Error('Network response was not ok');
        }
      })
      .then(response => {
        if (response.ok) {
          response.json().then((data) => {
            onEditInstrument(data);
            setErrors(false);
          });
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
        {errors && <div className="error">{errors}</div>}
      </div>
    )
  

}

export default LoanDeletion;