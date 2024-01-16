"use client"

import { createContext, useState } from "react";

type Props={
    children:React.ReactNode;
}

export const ThemeContext = createContext();
const ThemeContextToggle = (props:Props) => {
    const[mode,setMode] = useState("dark");

    const toggle=()=>{
        setMode((prev)=> prev==="dark" ? "light":"dark");
    }
  return (
   <ThemeContext.Provider value={{toggle,mode}}>
    <div className={`theme ${mode}`}>{props.children}</div>
   </ThemeContext.Provider>
  )
}

export default ThemeContextToggle
