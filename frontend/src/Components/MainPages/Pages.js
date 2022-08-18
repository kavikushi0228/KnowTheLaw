import React, {useContext} from 'react'
import {Switch, Route} from 'react-router-dom'
import SignIn from './SignIn'
import SignUp from './SignUp'
import Home from './Home'
import NotFound from './NotFound'
import Categories from './Categories'
import {GlobalState} from '../../GlobalState'




export default function Pages() {

  

  return (
   <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/login" exact component={SignIn} />
    <Route path="/register" exact component={SignUp} />
    <Route path="/category" exact component={Categories} />
    <Route path="/*" exact component={NotFound} />
   </Switch>
  )
}
