import React from 'react'
import './App.css'
import { TextField } from './components/TextField'
import { Button } from './components/Button'

function App () {
  return (
    <div className='App'>
      {/* <TextField text='hello' person={{ firstName: '', lastName: '' }} /> */}
      <Button text='hello' border='error' />
    </div>
  )
}

export default App
