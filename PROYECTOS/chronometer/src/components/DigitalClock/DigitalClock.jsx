import React, { useEffect, useState } from "react";
import "./DigitalClock.css"

const DigitalClock = () => {

  const [clockState, setClockState] = useState();

  useEffect(() => {

    setInterval(() => {
      const date = new Date(); // Date representa la fecha y hora actual 
      setClockState(date.toLocaleTimeString()); // se utiliza para obtener la hora actual 
      //y va actualizando cada segundo gracias al Set, así cada S clock cambia pq esta siendo actualizado
    }, 1000); // se va a ejecutar cada segundo  

  }, []);
  //con el array vacío se ejecutara solo una y será cuando se monte
  
  return (
    <div className="digital-clock">
      <h2>{clockState}</h2>
    </div>
  );
};

export default DigitalClock;