import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Bgchanger from './component/Bgchanger'

function App() {
  

  return (
    <>
    <button onClick={() => changeColor('red')}>Red</button>;
    <button onClick = {() => changeColor(Green)}>Green</button>
    <button onClick = {() => changeColor(Blue)}>Blue</button>
    

    </>
  )
}

export default App
