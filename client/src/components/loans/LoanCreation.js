import React from 'react'

function LoanCreation ({id, currentUser, onEditInstrument, setErrors, onAddLoan}){

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
      if (!response.ok) {
        setErrors(response.statusText);
      }
      return response.json();
    })
      .then(loan =>{
        onAddLoan(loan) 
        return fetch(`/instruments/${id}`, {
          method: 'PATCH',
          body: JSON.stringify({ condition: 'Loaned Out' }),
          headers: {
            'Content-Type': 'application/json'
          }
        });
    })
    .then(response => {
      if (response.ok) {
        response.json()
        .then((data) => {
          onEditInstrument(data)
          setErrors(false)
          alert(`Congrats on the ${data.name} hold! Please pick up the instrument within 2 days from location [x]. You can also delete the potential loan from your account page if you can't make it, that way someone else can have the opportunity to borrow it during that time. After you return the loan, you will have the opportunity to tell everyone about your experience. We hope you enjoy the ${data.name}!`)
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

      {currentUser?(
        <div>
        <p>This instrument is available for loan.</p>
        <p>Click "borrow" and pick up the instrument within 2 days to start playing.</p>
        <button type="button" onClick={handleSubmit}>Borrow!</button>
        </div>
      ): (
        <h5>Login or signup to borrow this instrument.</h5>
      )}
      
      </div>
    )
  
}

export default LoanCreation