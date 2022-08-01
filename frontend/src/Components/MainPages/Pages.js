import React from 'react'
import {Switch, Route} from 'react-router-dom'
import SignIn from './SignIn'
import SignUp from './SignUp'
import NotFound from './NotFound'

export default function Pages() {
  return (
    
    <Switch>
      <Route path="/login" exact component={SignIn} />
      <Route path="/register" exact component={SignUp} />
      <Route path="*" exact component={NotFound} />
    </Switch>
    
  )
}
