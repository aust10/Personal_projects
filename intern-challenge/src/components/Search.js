import React from 'react'

export default function Search (props) {

  const { handleChange, handleSearch, handleNomination } = props
  return (
    <div>
      <input type='text' value={props.state.search} onChange={handleChange} />
      <button onClick={handleSearch}>Click</button>
      <div>
        {props.state.movies.map(movie =>
          <div key={movie}>
            <h3>{movie.Title}</h3>
            <p>{movie.Released}</p>
            <button onClick={() => handleNomination(movie)}>Save</button>
          </div>
        )}
      </div>
    </div>
  )
}
