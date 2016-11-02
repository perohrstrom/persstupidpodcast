import 'babel-polyfill'
import { Button, Card, Row, Col } from 'react-materialize'
import 'materialize-css'
import React from 'react'
import { render } from 'react-dom'
import App from './App'


render(
  <App />,
  document.getElementById('app')
)
