import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    const data = useLoaderData()
    // const [data, setData] = useState({})
    // useEffect(() => {
    //     fetch('https://api.github.com/users/sumit2898')
    //         .then((res) => res.json())
    //         .then((data) => {
    //             console.log(data);
    //             setData(data)
    //         })
    //         .catch((error) => console.error('Error fetching data:', error))
    // }, [])
    
    return (
        <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>
            <div>Github Followers: {data.followers}</div>
            <img src={data.avatar_url} alt='Profile Pic' className='w-32 h-32 mx-auto mt-4 rounded-full' />
        </div>
    )
}

export default Github

export const githubdataloader = async () =>{
    const response = await  fetch('https://api.github.com/users/sumit2898')
    return response.json()
}