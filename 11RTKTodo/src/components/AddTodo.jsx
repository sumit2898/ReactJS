import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../features/todo/todoSlice'

function AddTodo() {
    const [input, setInput] = useState('')
    const dispatch = useDispatch()

    const handleAddTodo = (e) => {
        e.preventDefault()
        if (!input.trim()) return
        dispatch(addTodo(input.trim()))
        setInput('')
    }

    return (
        <form onSubmit={handleAddTodo} className="w-full max-w-2xl mx-auto mb-4 flex">
            <input
                type="text"
                placeholder="Enter the todo"
                className="flex-1 border border-gray-300 rounded-l-md px-3 py-2 focus:outline-none bg-white/80 dark:bg-gray-800"
                value={input}
                onChange={(e) => setInput(e.target.value)}
            />
            <button type="submit" className="bg-green-600 hover:bg-green-700 text-white px-4 rounded-r-md">
                Add
            </button>
        </form>
    )
}

export default AddTodo