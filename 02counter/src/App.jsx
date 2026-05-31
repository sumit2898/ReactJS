import { useState } from 'react'
import reactLogo from './assets/react.svg'

import './App.css'

function App() {

  const [counter, setCounter]  = useState(15)

  //let counter = 15

  const addValue = () => {
    //counter = counter + 1
    if( counter < 20){
      setCounter(counter + 1)
    } else {
      console.log("Greater than 20");
    }
  }

  const removeValue = () => {
    if (counter > 0){
      setCounter(counter - 1)

      // setCounter(precounter => precounter+1)
      // setCounter(precounter => precounter+1)
      // setCounter(precounter => precounter+1)
      // setCounter(precounter => precounter+1)
      // to put bundle of change at once 
      // SetCounter is call function user preCounter as previous data
      
    } else {
      console.log("negative numbers")
    }
  }

  return (
    <>
      <h1>React</h1>
      <h2>Counter value: {counter}</h2>

      <button
      onClick={addValue}
      >Add value {counter}</button> 
      <br />
      <button
      onClick={removeValue}
      >remove value {counter}</button>
      <p>footer: {counter}</p>
    </>
  )
}

export default App
