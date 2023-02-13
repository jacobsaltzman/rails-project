//import { useEffect, useState } from 'react'
//import {useParams} from 'react-router-dom'

function MemberPage({currentUser}){


  return(
    <div>
    <h3>{currentUser.username}</h3>

    <h5>Current Loans</h5>
    <p>Loans with a falsey return value here.</p>

    <h6>Previous Loans</h6>
    <p>Loans with a truthy return value here.</p>
    </div>
  )
}

export default MemberPage;