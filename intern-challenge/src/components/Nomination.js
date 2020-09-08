import React from 'react'

function Nomination (props) {
  const { nomination, handleDelete } = props
  return (
    <div>
      {nomination
        ? nomination.map(movie =>
          <div key={movie}>
            <h3>{movie.Title}</h3>
            <p>{movie.Released}</p>
            <button onClick={() => handleDelete(movie)}>Delete</button>
          </div>
        )
        : 'You have nothing to display'}

    </div>
  )
}

export default Nomination
