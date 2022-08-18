import React, {useState, useContext} from 'react'
import { GlobalState } from '../../GlobalState'
import {Link} from 'react-router-dom'



export default function Header() {
    const value = useContext(GlobalState)
  return (
    <div>
    <li  ><Link to="/">Home</Link></li>
    <li  ><Link to="/login">SignIn</Link></li>
    <li  ><Link to="/register">SignUp</Link></li> 
    <li  ><Link to="/category">Categories</Link></li> 
    
           
    </div>
  )
}
