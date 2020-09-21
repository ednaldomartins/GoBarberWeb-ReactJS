import React from 'react';
import {Router} from 'react-router-dom'

import './config/ReactotronConfig'
import Routes from './route'
import history from './service/history'

import GlobalStyle from './style/global'

export default function App() {
  return (
    <Router history={history}>
      <Routes />
      <GlobalStyle />
    </Router>
  );
}
