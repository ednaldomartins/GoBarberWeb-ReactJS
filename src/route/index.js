import React from 'react'
import {Switch, Route} from 'react-router-dom'

import Dashboard from '../page/dashboard'
import Profile from '../page/profile'
import SignIn from '../page/signin'
import SignUP from '../page/signup'

export default function Router() {
  return(
    <Switch>
      <Route path="/" exact component={SignIn}/>
      <Route path="/register" component={SignUP}/>
      <Route path="/dashboard" component={Dashboard}/>
      <Route path="/profile" component={Profile}/>
    </Switch>
  )
}
