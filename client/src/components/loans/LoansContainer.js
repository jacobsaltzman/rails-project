import { useEffect, useState } from 'react';
import LoansCurrent from './LoansCurrent';
import LoansPrevious from './LoansPrevious';

function LoansContainer ({currentUser, onEditInstrument}){

  const { loans } = currentUser;


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


    return (
      <div id='user-loans'>

        <div id='current-loans'>
          <LoansCurrent setCurrentLoans={setCurrentLoans} currentLoans={currentLoans} onEditInstrument={onEditInstrument}/>
        </div>


        <div id='previous-loans'>
            <LoansPrevious returnedLoans={returnedLoans} />
        </div>


      </div>
    )
  
}

export default LoansContainer