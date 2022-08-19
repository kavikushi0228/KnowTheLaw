import React, {useState, useContext}  from 'react'
import { GlobalState } from '../../GlobalState'
import {Link} from 'react-router-dom'
import './Header.css';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

export default function Header() {
  const HeaderStyle = {
    textDecoration: 'none',
    fontSize:'20px',
    color: 'rgb(8, 152, 255)'
}

    const value = useContext(GlobalState)
    const [menu, setMenu] = useState(false)
  return (
   
    <div className="header">
        <ul className='no-bullets'>
        <li className="header-l" ><Link to="/" style={HeaderStyle}>Home</Link></li>
        <li className="header-l"><Link to="/category" style={HeaderStyle}>Categories</Link></li>
        <li className="header-l"><Link to="/register" style={HeaderStyle}>Sign Up</Link></li> 
        <li className="header-l"><Link to="/login" style={HeaderStyle}>Login</Link></li>
        </ul>   
    </div>
  )
}

