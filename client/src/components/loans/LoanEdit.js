import {useState} from 'react'



function LoanEdit(){

  const [isEditMode, setIsEditMode] = useState(false);

  function handleEditMode(){
    setIsEditMode(!isEditMode)
  }

  return(
    <div>
      <button onClick={() => handleEditMode()}>Edit</button>
    </div>
  )
}

export default LoanEdit;