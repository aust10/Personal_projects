import React from 'react'
import { Button } from '@material-ui/core'

function Main (props) {
  const { history } = props
  return (
    <div>
      <Button onClick={() => history.push('/Settings')}>Back</Button>
      <h1>Main sub section of Setting</h1>
    </div>
  )
}

export default Main
