//import { useState } from 'react'
//import {useParams} from 'react-router-dom'
import LoansContainer from "./loans/LoansContainer";

function MemberPage({currentUser, onEditInstrument, onEditInstrumentLoan, handleUpdateCurrentUser}){


  return(
    <div id='current-user-header'>
    <h3>{currentUser.username}</h3>
    {!currentUser.creationDate ? <p>Sign in to see more.</p> : <p>Member since {currentUser.creationDate}</p>}
    
    <LoansContainer handleUpdateCurrentUser={handleUpdateCurrentUser} onEditInstrumentLoan={onEditInstrumentLoan} currentUser={currentUser} onEditInstrument={onEditInstrument} />
    </div>
  )
}

export default MemberPage;