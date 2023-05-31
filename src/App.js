import { useState } from 'react';
import './index.css';

function App() {

  let [position, setPosition] = useState(0);
  let [seconds, setSeconds] = useState(0);

  function rotate(){
    setPosition(position + 6)
  }

  function updateSeconds(){
    setSeconds(seconds + 1);
  }

  setInterval(rotate, 1000);
  setInterval(updateSeconds, 1000);

  return (
    <div className="App">

      <h3>TIME</h3>
      <div className="clock">
        <div className="numbers">
          <div className="secondHand" style={{transform: `rotate(${position}deg)`}}></div>

          {/* <h3>12</h3>
          <h3>3</h3>
          <h3>9</h3>
          <h3>6</h3> */}
        </div>
      </div>

      <h1>{seconds}</h1>
    </div>
  );
}

export default App;
