import React, {useState, useContext} from 'react'
import { GlobalState } from '../../GlobalState'
import {Link} from 'react-router-dom'
import './Header.css';



export default function Header() {
  const HeaderStyle = {
    color: 'white',
    textDecoration: 'none',
    fontSize:'20px'
}

    const value = useContext(GlobalState)
  return (
    <div className="header">
    <li className="header.font"><Link to="/" style={HeaderStyle}>Home</Link></li>
    <li className="header.font"><Link to="/login" style={HeaderStyle}>SignIn</Link></li>
    <li className="header.font"><Link to="/register" style={HeaderStyle}>SignUp</Link></li> 
    <li className="header.font"><Link to="/category" style={HeaderStyle}>Categories</Link></li> 
    
           
    </div>
  )
}
