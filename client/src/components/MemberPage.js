//import { useState } from 'react'
//import {useParams} from 'react-router-dom'
import LoansContainer from "./loans/LoansContainer";

function MemberPage({currentUser}){


  return(
    <div id='current-user-header'>
    <h3>{currentUser.username}</h3>
    {!currentUser.creationDate ? <p>Thanks for being a member.</p> : <p>Member since {currentUser.creationDate}</p>}
    
    <LoansContainer currentUser={currentUser} />
    </div>
  )
}

export default MemberPage;