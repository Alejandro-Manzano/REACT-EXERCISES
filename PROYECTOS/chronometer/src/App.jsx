import './App.css'
import Countdown from './components/Countdown/Countdown';
import DigitalClock from './components/DigitalClock/DigitalClock';
import Stopwatch from './components/Stopswatch/Stopwatch';

function App() {

  return (
    <div>
      
      <DigitalClock></DigitalClock>
      <Countdown></Countdown>
      <Stopwatch></Stopwatch>

    </div>
  )
}

export default App
