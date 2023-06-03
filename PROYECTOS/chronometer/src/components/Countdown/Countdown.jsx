import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
//dependencia para poder seleccionar cualquier día en un calendario
import "react-datepicker/dist/react-datepicker.css";

const Countdown = () => {

  const [time, setTime] = useState(""); //para almacenar el tiempo restante en el contador
  const [selectedDate, setSelectedDate] = useState(null); //para almacenar la fecha seleccionada por el usuario

  useEffect(() => { //va a iniciar el contador cuando se selecciona una fecha

    let countDownDate = selectedDate ? selectedDate.getTime() : null;
    //si selectedDate tiene un valor se obtiene el tiempo de la fecha en milisegundos con getTime

    if (countDownDate) {

      let x = setInterval(() => { //intervalo para actualizar el tiempo restante del contador

        let now = new Date().getTime();
        let distance = countDownDate - now; //configuración para ver si 
        //la fecha seleccionada es anterior a la actual

        let days = Math.floor(distance / (1000 * 60 * 60 * 24));
        let hours = Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((distance % (1000 * 60)) / 1000);

        setTime(days + "d " + hours + "h " + minutes + "m " + seconds + "s ");
        //actualizo el contador

        if (distance < 0) {
          clearInterval(x);
          setTime("COUNTDOWN FINISHED");
        }
        //Si la diferencia es menor a cero, se limpia el intervalo 
        //utilizando clearInterval y se establece "COUNTDOWN FINISHED" 

      }, 1000);

      return () => clearInterval(x);
      //se devuelve una función de limpieza para asegurarse de que se limpie el intervalo cuando se desmonte
    }
    }, [selectedDate]);

  const handleCountdownStart = () => {
    //función para iniciar el contador
    if (selectedDate) { //se verifica si la fecha tiene valor

      let countDownDate = selectedDate.getTime();
      let now = new Date().getTime();

      if (countDownDate > now) { //comparamos fechas si es mayor la seleccionada 
        clearInterval(); //se limpia el intervalo
        setTime(""); //se reinicia el tiempo
      }
    }
  };

  return (
    <div className="countdown">

      <h2>{time}</h2> {/* tiempo restante del contador */}

      <DatePicker /* componente para seleccionar fecha de calendario */
        className="date-selector"
        selected={selectedDate}
        onChange={(date) => setSelectedDate(date)}
        placeholderText="Seleccione una fecha"
      />

      <button onClick={handleCountdownStart}>Iniciar contador</button>
        {/* cuando se selecciona la fecha te pinta el h3 */}
      {selectedDate && (<h3>Fecha seleccionada: {selectedDate.toDateString()}</h3>)}
    </div>
  );
};

export default Countdown;
