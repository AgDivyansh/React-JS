import React from 'react'
import {useEffect, useState} from 'react'
import { useLoaderData } from 'react-router-dom'
function GitHub() {

    // const [data, setData] = useState([]) ;
    // useEffect(() => {
    //     fetch('https://api.github.com/users/AgDivyansh')
    //     .then((response) => response.json())
    //     .then((data) => {
    //         console.log(data);
    //         setData(data)
            
    //     })
    // },[])
    const data = useLoaderData() ;

  return (
    <>
        <div  
        className='text-center m-4 bg-gray-600 text-white p-4 text-3xl flex self-center justify-center
        flex-col
        '
        >

            <img src={data.avatar_url} alt="Git Image"  
            // className='center'
            />
            GitHub Followers: {data.followers}
        </div>
    </>
  )
}

export default GitHub

export const githubInfoLoader = async () => {
   const response = await fetch('https://api.github.com/users/AgDivyansh');
   return response.json();
}
