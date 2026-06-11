import { useState } from 'react'
import Login from './Components/Login'
import Profile from './Components/Profile'

import './App.css'
import UserContextProvider from './context/UserContextProvider'

function App() {
  const [count, setCount] = useState(0)

  return (
    <UserContextProvider className='bg-gray-500'>
      <h1 className='bg-gray-700 text-white flex justify-center my-4 p-4 text-3xl'> Context Api</h1>
      <Login/>
      <Profile/>
      
    </UserContextProvider>
  )
}

export default App
