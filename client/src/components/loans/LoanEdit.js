import {useState} from 'react'



function LoanEdit({loan}){

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
    console.log(formData)
  }


  return(
    <div>
      {isEditMode? <div><input onChange={handleChange} type='text' placeholder="Edit your experience..."></input><button className='submit-button' type='submit' onClick={handleEditLoanClick}>Submit Update</button></div>: <h5>{loan.experience}</h5>}
      <button id='edit-button' type='submit'onClick={handleEditMode}>{isEditMode? 'nevermind': 'edit?'}</button>
    </div>
  )
}

export default LoanEdit;