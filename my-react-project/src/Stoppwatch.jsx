import {useState, useEffect} from  'react';


function Stoppwatch() {

  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [intervalId, setIntervalId] = useState(null);
  const [laps, setLaps] = useState([]);


  function HandleStart() {
    setIsRunning(true);
     const id = setInterval((time) => {
        setTime(t => t + 1);
     }, 1000);
    setIntervalId(id); /* Store interval Id */
  }


  function handleStop() {
    if(isRunning) {
        setIsRunning(false);
        clearInterval(intervalId);
        setIntervalId(null);
    }
   
  }


  function handleReset() {
    setIsRunning(false);
    setTime(t => t = 0);
  }

  function handleLap() {
      setLaps((laps) => [...laps, time]);
      console.log(laps);
    }

    function deleteLap(index) {
       setLaps((laps) => laps.filter((_, i) =>  i !== index));

    }
    return(<>
    <div className='Stoppwatch-Container'>
        <h1>Stoppwatch</h1>
        <button onClick={HandleStart}>Start</button>
        <button onClick={handleStop}>Stop</button>
        <button onClick={handleReset}>Reset</button>
        <button onClick={handleLap}>Lap</button>
        <h1>{time}s</h1>
        <h1>{Math.floor(time / 60)}m</h1>
        <h1>{Math.floor(time / 3600)}h </h1>
        <ol className='LapList'>
          {laps.map((lap, index) => {
            return<>
            {/* Here we use the key  to identify each lap;
            so when pressing delete button,
             it will delete the correct lap */}

            <div key={lap}>
            <li>{lap}s</li>
            <button onClick={() => deleteLap(index)}>❌</button>
            </div>
             
            </>
          })}
        </ol>
        
    </div>
    
        
    
    
    
    </>)
}


export default Stoppwatch;