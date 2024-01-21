"use client"
import { useSession } from 'next-auth/react'
import React, { useEffect, useState } from 'react'
import useSWR from 'swr'

// fetcher for SWR
const fetcher = (...args) => fetch(...args).then((res) => res.json())

const DashBoard = () => {
  // const[data,setData] = useState([]);
  // const[err,setError] = useState(false);
  // const[isLoading,setIsLoading] = useState(false);
  
  // useEffect(()=>{
  //   const getData= async()=>{
  //     setIsLoading(true);
  //     const res = await fetch('https://jsonplaceholder.typicode.com/posts',{
  //       cache:'no-store'
  //     });
  //     if(!res.ok){
  //       setError(true);

  //     }
      
  //     const data = await res.json();
  //     setData(data);
  //     setIsLoading(false);
  //   }
  //   getData();
  // },[])
  // console.log(data);
  const {data,isLoading,error} = useSWR('https://jsonplaceholder.typicode.com/posts',fetcher);
  const session = useSession();
  console.log(session);
  return (
    <div>
      Dashboard
    </div>
  )
}

export default DashBoard
