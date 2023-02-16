import React from 'react'

function LoanCreation ({id, currentUser, onEditInstrument}){

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
        //console.log(response)
        //loan resp will need to go into currentUser array
        return fetch(`/instruments/${id}`, {
          method: 'PATCH',
          body: JSON.stringify({ condition: 'Loaned Out' }),
          headers: {
            'Content-Type': 'application/json'
          }
        });
      } else {
        throw new Error('Failed to create loan');
      }
    })
    .then(response => {
      if (response.ok) {
        response.json()
        .then((data) => {
          onEditInstrument(data)
        })
       
        //Maybe should nav to account
      } else {
        throw new Error('Failed to update instrument status');
      }
    })
    .catch(error => {
      console.log(error)
      //need to append any errors into html elements
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