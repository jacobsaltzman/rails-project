//import { useEffect, useState } from 'react'
//import {useParams} from 'react-router-dom'

function MemberPage({currentUser}){

  let userCreationDate;

   if (currentUser.created_at){
      userCreationDate = currentUser.created_at.split('T')
   }



  return(
    <div>
    <h3>{currentUser.username}</h3>
    {userCreationDate?<p>Member since {userCreationDate[0]}</p>: ""}

    <h5>Current Loans</h5>
    <p>Loans with a falsey return value here.</p>

    <h6>Previous Loans</h6>
    <p>Loans with a truthy return value here.</p>
    </div>
  )
}

export default MemberPage;