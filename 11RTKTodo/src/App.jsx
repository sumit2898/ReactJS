import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import AddTodo from './components/AddTodo'
import Todo from './components/Todo'

function App() {
  const [count, setCount] = useState(0)

  return (
    <main className="p-6">
      <h1 className="text-3xl font-bold mb-6">React Redux Tool Kit</h1>
      <AddTodo />
      <Todo />
    </main>
  )
}

export default App
