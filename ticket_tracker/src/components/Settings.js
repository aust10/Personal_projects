import React from 'react'
import { Button } from '@material-ui/core'

function Settings (props) {
  const { history } = props
  return (
    <>
      <Button onClick={() => history.push('/Settings/About')}>About</Button>
      <Button onClick={() => history.push('/Settings/Main')}>Main</Button>
    </>
  )
}

export default Settings
