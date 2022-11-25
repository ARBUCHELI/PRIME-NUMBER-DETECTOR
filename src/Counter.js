import React, { useState, useEffect } from 'react';
import './App.css';
 
export const Counter = () => {
  
  const [counter, setCounter] = useState(0);
  
  useEffect(() => {
    if (isPrime(counter)) {
      document.body.style.backgroundImage = 'linear-gradient(to right, #ffcc5c 100%, cyan)';
    } else {
      document.body.style.backgroundImage = "";
    }
  }, [counter]);

  return (  
    <div style={{textAlign: "center"}}>
      <h1>Prime Number Color Detector</h1>
      <h2>Count: {counter}</h2>
      <button onClick={() => setCounter(counter + 1)}>Click Me!</button>
      <footer>Bucheli Web 2022</footer>
    </div>
  );
}


const isPrime = (num) => {
  const squareRoot = Math.sqrt(num)
  for (let i = 2; i <= squareRoot; i++) {
    if (num % i === 0) {
      return false; 
    }
  }
  return num > 1;
}