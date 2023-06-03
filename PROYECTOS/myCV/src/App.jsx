import { useState } from "react";
import "./App.css";
import { CV } from "./CV/CV";
import About from "./components/About/About";
import Hero from "./components/Hero/Hero";
import More from "./components/More/More";
import Education from "./components/Education/Education";
import Experience from "./components/Experience/Experience";


const { hero, education, experience, languages, habilities, volunteer } = CV;
//destructuring de CV para acceder mas fácil a cada dato
import './App.css'


function App() {

  const [paintEdEx, setPaintEdEx] = useState(true);

  return (
    <div className="App">

      {/* a todos los components les paso el parametro según su nombre y ahora lo igualo al valor que correspode en CV */}
      <Hero hero={hero} /> 
      <About hero={hero} />

      {/* al clicar un boton lo reinicio a true o false para luego ejecutarlo en el condicional */}
      
      <div className="buttom-container">
        <button className="buttom-useState" onClick={() => setPaintEdEx(true)}>Education</button>
        <button className="buttom-useState" onClick={() => setPaintEdEx(false)}>Experience</button>
      </div>

      <div>
        {paintEdEx ? /*  de entrada va a estar en true */
          <Education education={education} />
          : 
          <Experience experience={experience} />
        }
      </div>

      <More languages={languages} habilities={habilities} volunteer={volunteer}/>
    </div>
  );

}

export default App
