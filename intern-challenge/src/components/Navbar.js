import React, { useState } from 'react'
import Search from './Search'
import Nomination from './Nomination'
import apiKey from '../secrets'

class Navbar extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      active: false,
      search: '',
      movies: [],
      nomination: []
    }
  }
  handleSearch = () => {
    const search = this.state.search
    fetch(`http://www.omdbapi.com/?t=${search}&apikey=${apiKey}`,
      {
        method:
        'GET'
      }
    )
      .then(response => response.json())
      .then(data => {
        this.setState({
          movies: [data],
          search: ''
        })
      })    
  }

  handleChange= (evt) => {
    this.setState({search: evt.target.value})
  }
  handleNomination= (x) => {
    this.setState({nomination: this.state.nomination.concat(x)})
  }
  handleDelete = (x) => {
    const movies = [...this.state.nomination]
    movies.splice(movies.indexOf(x), 1)
    this.setState({nomination: movies})
    
  }

  render () {
    const { active, nomination } = this.state
    return (
      <>
       {nomination.length >= 5 ?
       <h2>You have 5 Nominations</h2>
      :null }
        <div style={styles.navbar}>
          <button
            style={styles.button}
            onClick={() => this.setState({active:true})}
          >
          Nomination
          </button>
          <button
            style={styles.button}
            onClick={() => this.setState({active:false})}
          >
          Search
          </button>
        </div>
        <div>
          {active ? <Nomination handleDelete={this.handleDelete} nomination={this.state.nomination} /> : <Search handleChange={this.handleChange} handleSearch={this.handleSearch} handleNomination={this.handleNomination} state={this.state}/>}
        </div>
      </>
    )

  }
}

const styles = {
  navbar: {
    display: 'flex',
    justifyContent: 'center'
  },
  button: {
    margin: '5px'
  }
}

export default Navbar
