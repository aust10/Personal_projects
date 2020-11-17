import React, { ChangeEvent, useState } from 'react'

interface NewNoteInputProps {
  addNote(note: string): void
}

export const NewNoteInput:React.FC<NewNoteInputProps> = ({ addNote }) => {
  const [note, setNote] = useState('')

  //ChangeEvent has to specify what the event type is 
  const updateNote = (event:ChangeEvent<HTMLInputElement>) => {
    setNote(event.target.value)
  }

  const onAddNoteClick = () => {
    addNote(note)
    setNote('')
  }

  return (
    <div>
      <input onChange={updateNote} value={note} type='text' name='note' placeholder='Enter A Note' />
      <button onClick={onAddNoteClick}>Add Note</button>
  </div>
  )
}