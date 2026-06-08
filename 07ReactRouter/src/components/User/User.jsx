import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
  const { userid } = useParams()

  return (
    <div className="mx-auto max-w-3xl p-8 text-center">
      <h1 className="text-3xl font-bold mb-4">User Page</h1>
      <p className="text-lg text-gray-700">
        {userid ? `Showing details for user ID: ${userid}` : 'No user ID provided.'}
      </p>
    </div>
  )
}

export default User