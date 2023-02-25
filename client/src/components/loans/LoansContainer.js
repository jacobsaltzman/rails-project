import { useEffect, useState } from 'react';
import LoansCurrent from './LoansCurrent';
import LoansPrevious from './LoansPrevious';

function LoansContainer ({currentUser, onEditInstrument, onEditInstrumentLoan, handleUpdateCurrentUser}){

  const { loans } = currentUser;
  const [errors, setErrors] = useState(false)

  const [currentLoans, setCurrentLoans] = useState([]);
  const [returnedLoans, setReturnedLoans] = useState([]);


    
  useEffect(() => {
    if(loans){
    const current = loans.filter((loan) => !loan.returned);
    const returned = loans.filter((loan) => loan.returned);
    setCurrentLoans(current);
    setReturnedLoans(returned);
    console.log(loans)
    }
  }, [loans]);

  function onDeleteLoan(deletedLoanId) {
    const updatedLoans = currentLoans.filter((loan) => loan.id !== deletedLoanId);
    setCurrentLoans(updatedLoans);
  }


    function onReturnLoan(loan){
      onDeleteLoan(loan.id)
      setReturnedLoans([...returnedLoans, loan])
    }

    function onEditLoan(updatedLoan){
      const updatedLoans = returnedLoans.map((loan) => {
        if (loan.id === updatedLoan.id) {
          return updatedLoan;
        } else {
          return loan;
        }
      });
      setReturnedLoans(updatedLoans); //refreshes the users returned loans experience
      onEditInstrumentLoan(updatedLoan);  //updates the global instrument array to account for the new experience.
    }

    return (
      <div id='user-loans'>
        {errors && <div className="error">{errors}</div>}
        <div id='current-loans'>
          <LoansCurrent handleUpdateCurrentUser={handleUpdateCurrentUser} currentUser={currentUser} onReturnLoan={onReturnLoan} onDeleteLoan={onDeleteLoan} setErrors={setErrors} setCurrentLoans={setCurrentLoans} currentLoans={currentLoans} onEditInstrument={onEditInstrument}/>
        </div>


        <div id='previous-loans'>
            <LoansPrevious onEditLoan={onEditLoan} setErrors={setErrors} returnedLoans={returnedLoans} />
        </div>


      </div>
    )
  
}

export default LoansContainer