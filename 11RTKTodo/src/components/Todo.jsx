import React from 'react'
import {useSelector , useDispatch} from 'react-redux'
import { removeTodo } from '../features/todo/todoSlice'

function Todo() {
    const todos = useSelector((state) => state.todo)
    const dispatch = useDispatch()

    return (
        <div className="w-full max-w-2xl mx-auto p-4">
            <h2 className="text-2xl font-semibold mb-4">Todo List</h2>
            <ul className="space-y-2">
                {todos.map((todo) => (
                    <li key={todo.id} className="flex items-center justify-between bg-white/50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-md px-3 py-2">
                        <span className="text-base">{todo.text}</span>
                        <button
                            className="ml-4 text-red-600 hover:text-red-800"
                            onClick={() => dispatch(removeTodo(todo.id))}
                        >
                            X
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Todo