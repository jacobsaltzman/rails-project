import { useEffect, useState } from 'react';
import LoansCurrent from './LoansCurrent';
import LoansPrevious from './LoansPrevious';

function LoansContainer ({currentUser, onEditInstrument}){

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

    return (
      <div id='user-loans'>
        {errors && <div className="error">{errors}</div>}
        <div id='current-loans'>
          <LoansCurrent onReturnLoan={onReturnLoan} onDeleteLoan={onDeleteLoan} setErrors={setErrors} setCurrentLoans={setCurrentLoans} currentLoans={currentLoans} onEditInstrument={onEditInstrument}/>
        </div>


        <div id='previous-loans'>
            <LoansPrevious setErrors={setErrors} returnedLoans={returnedLoans} />
        </div>


      </div>
    )
  
}

export default LoansContainer