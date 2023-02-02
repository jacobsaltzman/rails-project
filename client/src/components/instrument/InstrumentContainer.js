import React from "react";
import InstrumentCard from "./InstrumentCard";

function InstrumentContainer({ instruments }){

  return(
    <ul className="instrument-container">
      {instruments.map((instrument) => {
        return (
          <InstrumentCard
          key={instrument.id}
          instrument={instrument}
          />
        )
      })}
    </ul>
  )
}

export default InstrumentContainer;