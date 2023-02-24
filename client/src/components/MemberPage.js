//import { useState } from 'react'
//import {useParams} from 'react-router-dom'
import LoansContainer from "./loans/LoansContainer";

function MemberPage({currentUser, onEditInstrument, onEditInstrumentLoan}){


  return(
    <div id='current-user-header'>
    <h3>{currentUser.username}</h3>
    {!currentUser.creationDate ? <p>Thanks for being a member.</p> : <p>Member since {currentUser.creationDate}</p>}
    
    <LoansContainer onEditInstrumentLoan={onEditInstrumentLoan} currentUser={currentUser} onEditInstrument={onEditInstrument} />
    </div>
  )
}

export default MemberPage;