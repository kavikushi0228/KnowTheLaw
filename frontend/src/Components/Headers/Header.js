import React, {useState, useContext} from 'react'
import { GlobalState } from '../../GlobalState'
import {Link} from 'react-router-dom'


export default function Header() {
    const value = useContext(GlobalState)
  return (
    <div >
      header1
      header2
      header3
    </div>
  )
}
