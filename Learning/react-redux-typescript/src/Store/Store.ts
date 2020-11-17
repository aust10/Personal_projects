import { createStore } from 'redux'
import { notesReducer } from './noteRecucers'

export const Store = createStore(notesReducer)