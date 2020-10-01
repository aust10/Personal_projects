import React, { useState } from 'react'
import { Button, TextField } from '@material-ui/core'
import { useTicketStore } from '../../store/StoreContext'
import { useObserver } from 'mobx-react'

function About (props) {
  const { history } = props
  const [name, setName] = useState({
    firstName: '',
    lastName: ''
  })

  const ticketStore = useTicketStore()

  const updateName = (evt) => {
    evt.preventDefault()
    console.log(evt.target.name)
    setName({
      ...name,
      [evt.target.name]: evt.target.value
    })
  }

  return useObserver(() => (
    <>
      <div>
        <Button data-testid='button' onClick={() => history.push('/Settings')}>Back</Button>
        <h1>Update User</h1>
      </div>
      <div>
        <TextField
          id='outlined-basic'
          label={ticketStore.currentUser.firstName}
          name='firstName'
          value={name.firstName}
          variant='outlined'
          helperText='First Name'
          onChange={updateName}
        />
        <TextField
          id='outlined-basic'
          label={ticketStore.currentUser.lastName}
          name='lastName'
          value={name.lastName}
          variant='outlined'
          helperText='Last Name'
          onChange={updateName}
        />
        <Button
          onClick={() => ticketStore.UpdateCurrentUser(name.firstName, name.lastName)}
          variant='outlined'
        >Submit
        </Button>
      </div>
    </>
  ))
}

export default About
