import React, { useEffect, useState } from "react";
import "./App.css";
import Figure from "./components/Figure";
import axios from "axios";

function App() {
  const today = new Date(Date.now()).toISOString().slice(0, 10);

  const [apod, setApod] = useState({}); // Estado para almacenar los datos de la foto 

  const [date, setDate] = useState(today); // Estado para almacenar la fecha seleccionada 

  const NASA_URL = "https://api.nasa.gov/";
  const NASA_API_KEY = "DRQe3BRfoZiL02ckiKqdvrncQCpLiVOCfBbzVV2G";

  useEffect(() => {
    const getApod = async () => {
      // Función asincrónica para obtener la foto astrofísica del día 
      const data = await axios.get(
        `${NASA_URL}planetary/apod?date=${date}&api_key=${NASA_API_KEY}`
      );
      setApod(data.data); // Actualiza el estado con los datos de la APOD obtenidos de la respuesta de la api
    };
    getApod(); // Llama a la función getApod al cargar el componente o cuando la fecha cambie
  }, [date]);

  const handleInput = (ev) => {
    setDate(ev.target.value.toLocaleString()); // Maneja el cambio de fecha seleccionada por el usuario y actualiza el estado date
  };

  return (
    <div className="App">
      <h1>Foto Astrologica del dia</h1>
      <input type="date" id="photo-date" onChange={handleInput} />
      {/* Condicional para mostrar la APOD o un mensaje de error si se selecciona una fecha futura */}
      {date > today ? (
        <h2>Elige una fecha previa a la actual</h2>
      ) : (
        <Figure data={apod} />
      )}
      <div className="standard-dialog center">
        <h3 className="dialog-text">
          @lethamburn - 2022 -{" "}
          <a href="https://api.nasa.gov/">https://api.nasa.gov/</a>
        </h3>
      </div>
    </div>
  );
}

export default App;
