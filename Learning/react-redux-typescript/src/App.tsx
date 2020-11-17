import React from 'react'
import { NewNoteInput } from './Components/NewnoteInput'
import { useSelector, useDispatch } from 'react-redux'
import { NotesState } from '../src/Store/noteRecucers'
import { addNote } from '../src/Store/Actions/Actions'

function App () {
  const notes = useSelector < NotesState, NotesState['notes']>((state) => state.notes)
  const dispatch = useDispatch()

  const onaddNote = (note:string) => {
    dispatch(addNote(note))
  }
  return (
    <>
      <NewNoteInput addNote={onaddNote} />
      <hr />
      <ul>
        {notes.map((note) => {
          return <li key={note}>{note}</li>
        })}
      </ul>
    </>
  )
}

export default App
