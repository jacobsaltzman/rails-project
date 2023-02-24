import React, { useState } from 'react';


function LoanReturn( {loan, updateInstrument, onReturnLoan} ){

  const [formData, setFormData] = useState();

  function handleChange(e) {
    const value = e.target.value;
    setFormData(value)
  }

  
  function returnLoan(){
    fetch(`/loans/${loan.id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json",
    },
    body: JSON.stringify({
        experience: formData,
        returned: true
    }),
  }) //refactor for errors.
    .then((r) => r.json())
    .then((updatedItems) => {
    onReturnLoan(updatedItems)
    updateInstrument(loan.instrument_id)
    console.log(updatedItems)
  });
  setFormData("")
  alert("Return accepted. If you haven't already, drop your instrument off at location [x] within 24 hours.")
    }


  return(
    <div className="return-instrument">
      <input onChange={handleChange} type='text' placeholder='Insert your experience!'></input>
      <button onClick={() => returnLoan()}>Return</button>
    </div>
  )
}

export default LoanReturn;