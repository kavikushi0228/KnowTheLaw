import React, {useContext} from 'react'
import {Switch, Route} from 'react-router-dom'
import SignIn from './SignIn'
import SignUp from './SignUp'
import NotFound from './NotFound'
import Categories from './Categories'
import {GlobalState} from '../../GlobalState'

export default function Pages() {

  const state = useContext(GlobalState)
  const [isLogged] = state.userAPI.isLogged
  const [isAdmin] = state.userAPI.isAdmin


  return (
    
    <Switch>
      <Route path="/login" exact component={isLogged ? NotFound : SignIn} />
      <Route path="/register" exact component={isLogged ? NotFound : SignUp} />
      <Route path="/categoty" exact component={isAdmin ? Categories : NotFound} />
      <Route path="*" exact component={NotFound} />
    </Switch>
    
  )
}
