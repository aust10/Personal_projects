import { Action } from './Actions/Actions'

export interface NotesState {
  notes: string[]
}

const initialState = {
  notes: []
}



// set the state to the type of NotesState equal to the inital state and the action type to Action
export const notesReducer = (state:NotesState = initialState, action: Action) => {
  switch(action.type){
    case 'ADD_NOTE': {
      return { ...state, notes: [...state.notes, action.payload]}
    }
    default:
      return state
  }
}