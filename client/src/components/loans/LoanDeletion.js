import {useContext} from 'react'
import { UserContext } from '../../context/user';



function LoanDeletion({ setErrors, loan, onDeleteLoan, updateInstrument, handleUpdateCurrentUser }) {

  const {id, instrument_id} = loan
  const {currentUser} = useContext(UserContext);

  
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
          const updatedUser = {
            ...currentUser,
            loans: currentUser.loans.filter((loan) => loan.id !== id)
          };
          handleUpdateCurrentUser(updatedUser);
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