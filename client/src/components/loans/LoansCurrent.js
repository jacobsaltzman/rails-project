import {useState} from 'react'

import LoanDeletion from './LoanDeletion'
import LoanReturn from './LoanReturn';

export default function LoansCurrent( {currentLoans, onEditInstrument, setErrors, onDeleteLoan, onReturnLoan, handleUpdateCurrentUser} ) {

  const [isSeen, setIsSeen] = useState(false);



  function handleIsSeen(e){
    setIsSeen(!isSeen)
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
        }else {
          response.json().then((err) => setErrors(err.errors));
        }
      });
  }


  return (
    <div id='loans-current'>
      <h4>Current Loans</h4>
      {currentLoans.map((loan) => (
      <div className='current-loan' key={loan.id}>
        <LoanDeletion handleUpdateCurrentUser={handleUpdateCurrentUser} updateInstrument={updateInstrument} setErrors={setErrors} onEditInstrument={onEditInstrument} onDeleteLoan={onDeleteLoan} loan={loan}/>
        <h5> {loan.instrumentname} </h5>
        <p className='loan-began'>began on {loan.loan_began} </p>
          <div>
          <button onClick={handleIsSeen}>{isSeen? 'Nevermind':'Returning Instrument?'}</button>
          {isSeen ? <LoanReturn handleUpdateCurrentUser={handleUpdateCurrentUser} setErrors={setErrors} onReturnLoan={onReturnLoan} updateInstrument={updateInstrument} loan={loan} /> : null} </div>
  </div>
))}

    </div>
  )
}
