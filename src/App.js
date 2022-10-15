import React,{useState,useEffect} from 'react';
import './App.css';

function App() {

    const [mtime, get1mtime] = useState(" ");

    const tick = () => {
        let time = new Date().getHours()+":"+new Date().getMinutes()+":"+new Date().getSeconds();
        get1mtime(time);
    }

    useEffect(() => {
        const t = setInterval(tick,1000);

        return () => {
            clearTimeout(t);
        }
    },[mtime])

  return (
    <div>
        <h1>DigitalClock</h1>
        <h2>{mtime}</h2>
    </div>
  )
}

export default App;

 