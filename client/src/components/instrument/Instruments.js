import React, {useState} from "react";
import InstrumentContainer from "./InstrumentContainer";
import InstrumentCreate from "./InstrumentCreate";


function Instruments({ instruments, onAddInstrument, setErrors }){

  const [isSeen, setIsSeen] = useState(true);

  function handleIsSeen(e){
    setIsSeen(!isSeen)
  }


  return(
    <div id='main-instrument-list'>
      <button onClick={handleIsSeen}>{isSeen? 'Donate Now!': 'Nevermind'}</button>
      {isSeen? <div></div>: <InstrumentCreate setErrors={setErrors} onAddInstrument={onAddInstrument}/>}
      <h2>The comprehensive list of Instruments.</h2>
      <InstrumentContainer instruments={instruments}/>
    </div>
  )


}

export default Instruments;