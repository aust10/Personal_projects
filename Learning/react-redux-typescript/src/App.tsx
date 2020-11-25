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

  const onDeleteClick = (note:React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    console.log(notes)
    console.log((note.target as HTMLInputElement).value)
    const changeVal = (note.target as HTMLInputElement).value
    notes.splice(notes.indexOf(changeVal), 1)
    console.log(notes)
    dispatch(addNote(notes))
  }
  return (
    <>
      <NewNoteInput addNote={onaddNote} />
      <hr />
      <ul>
        {notes.map((note) => {
          return <li key={note}>{note} <button value={note} onClick={(note) => onDeleteClick(note)}>Delete</button></li>
        })}
      </ul>
    </>
  )
}

export default App
