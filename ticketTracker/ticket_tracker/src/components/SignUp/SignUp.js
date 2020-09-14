import React, { useState } from 'react'
import { useTicketStore } from '../../store/StoreContext'
import TextField from '@material-ui/core/TextField'
import { Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
  root: {
    marginTop: 10
  },
  field: {
    margin: 5
  }
})

function SignUp () {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const ticketstore = useTicketStore()
  const styles = useStyles()
  return (
    <div>
      <TextField
        className={styles.field}
        id='outlined-basic'
        label='Email'
        variant='outlined'
        value={email}
        onChange={(evt) => setEmail(evt.target.value)}
      />
      <TextField
        className={styles.field}
        id='standard-password-input'
        type='password'
        label='Password'
        variant='outlined'
        autoComplete='current-password'
        value={password}
        onChange={(evt) => setPassword(evt.target.value)}
      />
      <br />
      <Button
        className={styles.root}
        varient='outlined'
        onClick={() => ticketstore.login(email, password)}
      >
        Sign Up
      </Button>
    </div>
  )
}

export default SignUp
