import React from "react";
import InstrumentContainer from "./InstrumentContainer";


function Instruments({ instruments }){

  return(
    <div id='main-instrument-list'>
      <h2>The comprehensive list of Instruments.</h2>
      <InstrumentContainer instruments={instruments}/>
    </div>
  )


}

export default Instruments;