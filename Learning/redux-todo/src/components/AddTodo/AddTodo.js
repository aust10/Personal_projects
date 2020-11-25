import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../../../src/redux/actions'

class AddTodo extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      input: ''
    }
  }

  updateInput = input => {
    this.setState({ input })
  }

  handleAddTodo = () => {
    this.props.addTodo(this.state.input)
    this.setState({ input: '' })
  }


  render() {
    return (
      <div>
        <input
          onChange={e => this.updateInput(e.target.value)}
          value={this.state.input}
        />
        <button
          className='add-todo' onClick={this.handleAddTodo}
        >
        Add Todo
        </button>
      </div>
    )
  }
}

// By passing it to connect, our component receives it as a prop, and it will automatically dispatch the action when it’s called.

export default connect(
  null,
  { addTodo }
)(AddTodo)

