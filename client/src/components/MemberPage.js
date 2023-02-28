import React, {useContext} from "react";
import { UserContext } from "../context/user";
import LoansContainer from "./loans/LoansContainer";

function MemberPage({ onEditInstrument, onEditInstrumentLoan, handleUpdateCurrentUser}){

  const {currentUser} = useContext(UserContext);


  return(
    <div id='current-user-header'>
    <h3>{currentUser.username}</h3>
    {!currentUser.creationDate ? <p>Sign in to see more.</p> : <p>Member since {currentUser.creationDate}</p>}
    
    <LoansContainer handleUpdateCurrentUser={handleUpdateCurrentUser} onEditInstrumentLoan={onEditInstrumentLoan} onEditInstrument={onEditInstrument} />
    </div>
  )
}

export default MemberPage;