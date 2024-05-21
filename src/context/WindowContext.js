import React, { createContext, useEffect, useState } from 'react'
export const Windowsize=createContext(null)

function WindowContext({children}) {
    const [windowsize,setwindowsize]=useState(window.innerWidth);
    useEffect(()=>{
        function setwindowwidth(){
            setwindowsize(window.innerWidth)
        }
        window.addEventListener("resize",setwindowwidth)
    
    return()=>{
        window.removeEventListener("resize",setwindowwidth)
    }}
    ,[])
  return (
    <Windowsize.Provider value={{windowsize,setwindowsize}}>{children}</Windowsize.Provider>
  )
}

export default WindowContext