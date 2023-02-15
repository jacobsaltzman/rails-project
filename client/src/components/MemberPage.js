//import { useEffect, useState } from 'react'
//import {useParams} from 'react-router-dom'

function MemberPage({currentUser}){

  let userCreationDate;
  let instrumentNum;

   if (currentUser){
      userCreationDate = currentUser.created_at.split('T')
      instrumentNum = currentUser.instruments.length
   }



  return(
    <div>
    <h3>{currentUser.username}</h3>
    {userCreationDate?<p>Member since {userCreationDate[0]}</p>: ""}
    {instrumentNum === 1 ? <p>You have loaned out {instrumentNum} instrument during your time as a member. Keep going! </p>:<p>You have loaned out {instrumentNum} instruments during your time as a member.</p>}

    <h5>Current Loans</h5>
    <p>Loans with a falsey return value here.</p>

    <h6>Previous Loans</h6>
    <p>Loans with a truthy return value here.</p>
    </div>
  )
}

export default MemberPage;