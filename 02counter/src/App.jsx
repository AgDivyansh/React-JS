import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  // const [count, setCount] = useState(0)
  let [count, setCounter] = useState(10);
  const addValue = () => {
    // setCounter(++count);
    if (count < 20)
    {
      setCounter(count+1) ;
    }
    else
    {
      count = 10 ;
      setCounter(count) ;
      alert(`you can not increase the value of counter more then 20`) ;
    }
    console.log(`value of counter after addition : ${count}`);
  };
  const decValue = () => {
    // setCounter(--count) ;
    if (count < 1)
    {
      count = 10 ;
      setCounter(count) ;
      alert(`you can not decrease the value more then 0`) ;
    }
    else
    {
      setCounter(count-1) ;
    }
    console.log(`value after - is :${count}`);
    
  }
  return (
    <>
      <h1>welcome Divyansh Agarwal</h1>
      {/* <p></p> */}
      <h2>counter value : {count} </h2>
      <button onClick={addValue}>increase (+) value</button>
      <br />
      <br />
      <button
        onClick={decValue}
      >decrease (-) value</button>
    </>
  );
}

export default App;
