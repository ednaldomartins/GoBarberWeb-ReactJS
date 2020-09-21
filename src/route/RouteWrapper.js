import React from 'react'
import {Route, Redirect} from 'react-router-dom'
import PropTypes from 'prop-types'

import AuthLayout from '../page/_layout/auth'
import DefaultLayout from '../page/_layout/default'

export default function RouteWrapper({
  component: Component,
  isPrivate,
  ...rest
}) {
  const signed = true

  if(!signed && isPrivate) {
    return <Redirect to="/" />
  }

  if(signed && !isPrivate) {
    return <Redirect to="/dashboard" />
  }

  const Layout = signed ? DefaultLayout : AuthLayout

  return (
    <Route {...rest}
      render={props => (
        <Layout>
          <Component {...props} />
        </Layout>
      )}
    />
  )
}

RouteWrapper.propTypes = {
  isPrivate: PropTypes.bool,
  component: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.func
  ]).isRequired
}

RouteWrapper.defaultProps = {
  isPrivate: false,
}


/*

import React from 'react';
import PropTypes from 'prop-types'

import {Wrapper} from './style'

export default function AuthLayout({children}) {
  return (
    <Wrapper>
      {children}
    </Wrapper>
  );
}

AuthLayout.propTypes = {
  children: PropTypes.element.isRequired,
}


import styled from 'styled-components'

export const Wrapper = styled.div`
  height: 100%;
  background: linear-gradient(-90deg, #ff9800, #c66900);
`

/*
color Primary: #ff9800
color Dark: #c66900
color Light: #ffc947
*/

