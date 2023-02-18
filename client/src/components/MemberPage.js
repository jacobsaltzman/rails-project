//import { useEffect, useState } from 'react'
//import {useParams} from 'react-router-dom'
import LoansContainer from "./loans/LoansContainer";

function MemberPage({currentUser}){

  let userCreationDate;
  let instrumentNum;

   if (currentUser){
      if(currentUser.created_at !== undefined){
      userCreationDate = currentUser.created_at.split('T')
      instrumentNum = currentUser.loans.length
      }
      else{
        userCreationDate = false;
        instrumentNum = false;
      }
   }
   

  return(
    <div>
    <h3>{currentUser.username}</h3>
    {!userCreationDate ? <p>Thanks for being a member.</p> : <p>Member since {userCreationDate[0]}</p>}
    {!instrumentNum ? <p> View the instruments page and borrow a loan to start a new experience. </p> : <p>You have loaned out {instrumentNum} instruments during your time as a member.</p>}

    
    <LoansContainer currentUser={currentUser} />
    </div>
  )
}

export default MemberPage;