import { combineReducers } from 'redux'
import pokemonReducer from './PokemonReducer'
import peopleReducer from './PeopleReducers'

const RootReducer = combineReducers({
  pokemon: pokemonReducer,
  people: peopleReducer
})

export default RootReducer