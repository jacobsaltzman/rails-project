import {useState} from 'react'
import LoanDeletion from './LoanDeletion'
import LoanReturn from './LoanReturn';

export default function LoansCurrent( {currentLoans, setCurrentLoans, onEditInstrument,setErrors} ) {

  const [isSeen, setIsSeen] = useState(false);

  function handleIsSeen(e){
    setIsSeen(!isSeen)
  }

  function onDeleteLoan(deletedLoanId) {
    const updatedLoans = currentLoans.filter((loan) => loan.id !== deletedLoanId);
    setCurrentLoans(updatedLoans);
  }

  const updateInstrument = (instrument_id) => {
    fetch(`/instruments/${instrument_id}`, {
      method: 'PATCH',
      body: JSON.stringify({ condition: 'Available' }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(response => {
        if (response.ok) {
          response.json()
            .then((data) => {
              onEditInstrument(data);
              setErrors(false);
            });
        }
      });
  }


  return (
    <div id='loans-current'>
      <h4>Current Loans</h4>
      {currentLoans.map((loan) => (
      <div className='current-loan' key={loan.id}>
        <LoanDeletion updateInstrument={updateInstrument} setErrors={setErrors} onEditInstrument={onEditInstrument} onDeleteLoan={onDeleteLoan} loan={loan}/>
        <h5> {loan.instrumentname} </h5>
        <p className='loan-began'>began on {loan.loan_began} </p>
          <div>
          <button onClick={handleIsSeen}>{isSeen? 'Nevermind':'Returning Instrument?'}</button>
          {isSeen ? <LoanReturn loan={loan} /> : null} </div>
  </div>
))}

    </div>
  )
}
