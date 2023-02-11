import React, {useState} from "react";
import InstrumentContainer from "./InstrumentContainer";
import InstrumentCreate from "./InstrumentCreate";


function Instruments({ instruments, onAddInstrument }){

  const [isSeen, setIsSeen] = useState(false);

  function handleIsSeen(e){
    setIsSeen(!isSeen)
  }


  return(
    <div id='main-instrument-list'>
      <button onClick={handleIsSeen}>{isSeen? 'Donate': 'Nevermind'}</button>
      {isSeen? <div></div>: <InstrumentCreate onAddInstrument={onAddInstrument}/>}
      <h2>The comprehensive list of Instruments.</h2>
      <InstrumentContainer instruments={instruments}/>
    </div>
  )


}

export default Instruments;