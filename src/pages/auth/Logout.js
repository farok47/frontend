import axios from 'axios'
import React from 'react'
import { url } from '../../api/Api'
import Cookie from 'cookie-universal'

function Logout() {
    const cookie=Cookie()
  async  function handlelogout(){
    try {
    const res =await axios.get(`${url}logout`,{headers:{
        Authorization:"Bearer "+cookie.get("ecommerce"),
    },})
        console.log(res)
    } catch (error) {
        console.log(error)
    }

    }
  return (
    <div><button onClick={handlelogout}>logout</button></div>
  )
}

export default Logout