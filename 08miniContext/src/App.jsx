import { useState } from 'react'
import Login from './Components/Login'
import Profile from './Components/Profile'

import './App.css'
import UserContextProvider from './context/UserContextProvider'

function App() {
  return (
    <div className="min-h-screen  flex items-center justify-center bg-slate-100">
      <div className="w-full max-w-xl px-4">
        <UserContextProvider>
          <h1 className="bg-gray-700 text-white text-center my-4 p-4 text-3xl rounded-lg">
            Context Api
          </h1>
          <Login />
          <Profile />
        </UserContextProvider>
      </div>
    </div>
  )
}

export default App
