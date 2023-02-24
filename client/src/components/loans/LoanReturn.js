import React from "react";


function LoanReturn( {loan} ){


  
  function returnLoan(x){
    console.log(x)
    }


  return(
    <div>
        <button onClick={() => returnLoan(loan.id)}>Return</button>
    </div>
  )
}

export default LoanReturn;