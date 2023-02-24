import {useState} from 'react'



function LoanEdit({loan, onEditLoan}){

  const [isEditMode, setIsEditMode] = useState(false);
  const [formData, setFormData] = useState();

  function handleEditMode(){

    
    setIsEditMode(!isEditMode)
  }

  function handleChange(e) {
    const value = e.target.value;
    setFormData(value)
  }

  function handleEditLoanClick(){
    fetch(`/loans/${loan.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
      },
      body: JSON.stringify({
          experience: formData
      }),
    }) //refactor for errors
      .then((r) => r.json())
      .then((updatedItems) => {
        console.log(updatedItems)
        onEditLoan(updatedItems)
      //updateInstrument(loan.instrument_id)
    });
    setFormData("")
    handleEditMode()
    }


  return(
    <div>
      {isEditMode? <div><input onChange={handleChange} type='text' placeholder="Edit your experience..."></input><button className='submit-button' type='submit' onClick={handleEditLoanClick}>Submit Update</button></div>: <h5>{loan.experience}</h5>}
      <button id='edit-button' type='submit'onClick={handleEditMode}>{isEditMode? 'nevermind': 'edit?'}</button>
    </div>
  )
}

export default LoanEdit;