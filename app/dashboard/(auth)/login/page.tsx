"use client"
import { signIn } from 'next-auth/react'
import React from 'react'

const Login = () => {
  return (
    <div>
      <button onClick={()=>signIn("google",{callbackUrl:"http://localhost:3000/dashboard"})}>Login With Google</button>
    </div>
  )
}

export default Login
