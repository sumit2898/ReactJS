import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeTodo, updateTodo } from '../features/todo/todoSlice'

function Todo() {
    const todos = useSelector((state) => state.todo)
    const dispatch = useDispatch()
    const [editingId, setEditingId] = useState(null)
    const [editText, setEditText] = useState('')

    const startEdit = (todo) => {
        setEditingId(todo.id)
        setEditText(todo.text)
    }

    const saveEdit = () => {
        if (!editText.trim()) return
        dispatch(updateTodo({ id: editingId, text: editText.trim() }))
        setEditingId(null)
        setEditText('')
    }

    const cancelEdit = () => {
        setEditingId(null)
        setEditText('')
    }

    return (
        <div className="w-full max-w-2xl mx-auto p-4">
            <h2 className="text-2xl font-semibold mb-4">Todo List</h2>
            <ul className="space-y-2">
                {todos.map((todo) => (
                    <li key={todo.id} className="flex flex-col gap-2 bg-white/50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-md px-3 py-3">
                        <div className="flex items-center justify-between gap-4">
                            {editingId === todo.id ? (
                                <input
                                    className="flex-1 border border-gray-300 rounded-md px-3 py-2 bg-white/90 dark:bg-gray-900 text-base"
                                    value={editText}
                                    onChange={(e) => setEditText(e.target.value)}
                                />
                            ) : (
                                <span className="text-base">{todo.text}</span>
                            )}
                            <div className="flex items-center gap-2">
                                {editingId === todo.id ? (
                                    <>
                                        <button
                                            className="px-3 py-1 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                                            onClick={saveEdit}
                                        >
                                            Save
                                        </button>
                                        <button
                                            className="px-3 py-1 bg-gray-300 text-gray-800 rounded-md hover:bg-gray-400"
                                            onClick={cancelEdit}
                                        >
                                            Cancel
                                        </button>
                                    </>
                                ) : (
                                    <>
                                        <button
                                            className="px-3 py-1 bg-yellow-400 text-black rounded-md hover:bg-yellow-500"
                                            onClick={() => startEdit(todo)}
                                        >
                                            Edit
                                        </button>
                                        <button
                                            className="px-3 py-1 bg-red-600 text-white rounded-md hover:bg-red-700"
                                            onClick={() => dispatch(removeTodo(todo.id))}
                                        >
                                            Delete
                                        </button>
                                    </>
                                )}
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Todo