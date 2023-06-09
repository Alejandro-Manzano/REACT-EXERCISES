import React, { useEffect, useState } from "react";
import "./Stopwatch.css";

const Stopwatch = () => {

  const [time, setTime] = useState(0); //para controlar el tiempo
  const [timerOn, setTimerOn] = useState(false); //para ver si se esta utilizand (si se hace click)

  useEffect(() => {

    let interval = null;

    if (timerOn) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
    }, [timerOn]); //cada vez que se monte, es decir cada vez que hago click
  
    return (

    <div className="stopwatch">

      <h2> {/* funciones para la conversión */}

        <span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
        <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}:</span>
        <span>{("0" + ((time / 10) % 100)).slice(-2)}</span>
        
      </h2>

      <div id="buttons">
        {!timerOn && time === 0 && ( /* aparece start si el c es 0 y no se ha clicado */
          <button onClick={() => setTimerOn(true)}>Start</button>
        )}
        {timerOn && <button onClick={() => setTimerOn(false)}>Stop</button>}
        {/* Stop si ha empezado a contar */}
        {!timerOn && time > 0 && (
          <button onClick={() => setTime(0)}>Reset</button>
        )}
        {!timerOn && time > 0 && (
          <button onClick={() => setTimerOn(true)}>Resume</button>
        )}
      </div>

    </div>
  );
};

export default Stopwatch;