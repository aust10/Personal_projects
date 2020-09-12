import React from 'react'
import { Button } from '@material-ui/core'

function About (props) {
  const { history } = props
  return (
    <div>
      <Button onClick={() => history.push('/Settings')}>Back</Button>
      <h1>About Sub Setting</h1>
    </div>
  )
}

export default About
