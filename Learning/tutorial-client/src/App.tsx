import React, {useState} from 'react';
import { useSelector, useDispatch } from 'react-redux'
import './App.css';
import { RootStore } from './Store';
import { GetPokemon } from './actions/PokemonActions'

function App() {
  const dispatch = useDispatch()
  const [pokemonName, setPokemonName] = useState('')
  const pokemonState = useSelector((state: RootStore) => state.pokemon)

  const handleSubmit = () => dispatch(GetPokemon(pokemonName))

  const handlechange = (event: React.ChangeEvent<HTMLInputElement>) => setPokemonName(event.target.value)

  console.log('pokemon state:', pokemonState)
  return (
    <div className="App">
      <input type='text' onChange={handlechange}/>
      <button onClick={handleSubmit}>Submit</button>
      {pokemonState.pokemon && (
        <div>
          <img src={pokemonState.pokemon?.sprites.front_default} alt='' />
          {pokemonState.pokemon.abilities.map(abilitiy => {
            return <p>{abilitiy.ability.name}</p>
          })}
        </div>

      )}
    </div>
  );
}

export default App;
