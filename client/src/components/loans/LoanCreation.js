import React from 'react'

function LoanCreation ({id, currentUser, onEditInstrument, setErrors}){

  function handleSubmit(e) {
    e.preventDefault();


    fetch('/loans', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accepts': 'application/json'
      },
      body: JSON.stringify({ instrument_id: id, member_id: currentUser.id })
    })
    .then(response => {
      if (response.ok) {
        console.log(response.json())
        //loan resp will need to go into currentUser array
        return fetch(`/instruments/${id}`, {
          method: 'PATCH',
          body: JSON.stringify({ condition: 'Loaned Out' }),
          headers: {
            'Content-Type': 'application/json'
          }
        });
      } else {
        setErrors(response.statusText)
      }
    })
    .then(response => {
      if (response.ok) {
        response.json()
        .then((data) => {
          onEditInstrument(data)
          setErrors(false)
        })
       
        //Maybe should nav to account
      } else {
        setErrors(response.statusText);
      }
    })
    .catch(error => {
      console.log(error)
    });
  };


    return (
      <div className='loan-creation'>

        <p>This instrument is available for loan.</p>
        <p>Click "borrow" and pick up the instrument within 2 days to start playing.</p>
        
        <button type="button" onClick={handleSubmit}>Borrow!</button>

      
      </div>
    )
  
}

export default LoanCreation