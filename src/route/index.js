import React from 'react'
import {Switch} from 'react-router-dom'
import Route from './RouteWrapper'

import Dashboard from '../page/dashboard'
import Profile from '../page/profile'
import SignIn from '../page/signin'
import SignUP from '../page/signup'

export default function Routes() {
  return(
    <Switch>
      <Route path="/" exact component={SignIn}/>
      <Route path="/register" component={SignUP}/>
      <Route path="/dashboard" component={Dashboard} isPrivate/>
      <Route path="/profile" component={Profile} isPrivate/>
    </Switch>
  )
}
