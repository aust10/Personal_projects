export type Action = {type: 'ADD_NOTE', payload: string}
export type DeleteAction = {type: 'DELETE_NOTE', payload: string}

export const addNote = (note: string): Action => ({
  type: 'ADD_NOTE',
  payload: note
})
export const deleteNote = (note: string): Action => ({
  type: 'DELETE_NOTE',
  payload: note
})