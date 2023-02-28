import {useState, useContext} from 'react'
import { UserContext } from "../../context/user";



function LoanEdit({loan, onEditLoan, setErrors, handleUpdateCurrentUser }){

  const {currentUser} = useContext(UserContext);
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
    }) 
      .then(r => {
        if(r.ok){
          r.json().then((updatedItems) => {
            onEditLoan(updatedItems)
            setFormData("")
            handleEditMode()
      //updateInstrument(loan.instrument_id)
      const updatedUser = {
        ...currentUser,
        loans: currentUser.loans.map((loan) => {
          if (loan.id === updatedItems.id) {
            return updatedItems;
          } else {
            return loan;
          }
        })
      };
      handleUpdateCurrentUser(updatedUser)
      })
    }else {
      r.json().then((err) => setErrors(err.errors));
    }
    });
  }


  return(
    <div>
      {isEditMode? <div><input onChange={handleChange} type='text' placeholder="Edit your experience..."></input><button className='submit-button' type='submit' onClick={handleEditLoanClick}>Submit Update</button></div>: <h5>{loan.experience}</h5>}
      <button id='edit-button' type='submit'onClick={handleEditMode}>{isEditMode? 'nevermind': 'edit?'}</button>
    </div>
  )
}

export default LoanEdit;