import React, { useEffect, useState } from 'react'

function Github() {
    const [data, setData]= useState([])
    useEffect(()=>{
        // Fetch github followers data here
        fetch('https://api.github.com/users/aditya1424')
        .then(response => response.json())
        .then(data =>{
           
            setData(data)
        })

    },[])
  return (
    <div className='bg-gray-600 text-white text-center text-3xl m-4 p-3'>
        Github followers: {data.following}
    </div>
  )
}

export default Github
