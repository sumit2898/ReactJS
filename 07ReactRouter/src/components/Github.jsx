import React from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    const data = useLoaderData()

    return (
        <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>
            <div>Github Followers: {data?.followers ?? 'Loading...'}</div>
            {data?.avatar_url && (
                <img
                    src={data.avatar_url}
                    alt='Profile Pic'
                    className='w-32 h-32 mx-auto mt-4 rounded-full'
                />
            )}
        </div>
    )
}

export default Github

export const githubdataloader = async ({ params }) => {
    const username = params.gitid || 'sumit2898'
    const response = await fetch(`https://api.github.com/users/${username}`)
    return response.json()
}