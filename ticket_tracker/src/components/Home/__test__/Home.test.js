import React from 'react'
import ReactDOM from 'react-dom'
import { render, cleanup } from '@testing-library/react'
import Home from '../Home'
import { IsoTwoTone } from '@material-ui/icons'
import { ExpansionPanelActions } from '@material-ui/core'

afterEach(cleanup)

it('Renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<Home />, div)
})
