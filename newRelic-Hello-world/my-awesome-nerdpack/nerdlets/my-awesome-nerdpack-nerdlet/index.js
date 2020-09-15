import React from 'react'
import { AccountsQuery, Spinner } from 'nr1'
import FirstComponent from './ components/FirstComponent'

// https://docs.newrelic.com/docs/new-relic-programmable-platform-introduction

export default class MyAwesomeNerdpackNerdletNerdlet extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      account: []
    }
  }

  componentDidMount () {
    AccountsQuery.query()
      .then((response) => this.setState({ account: response.data[0] }))
  }

  render () {
    return (
      <>
        <h1>You Did it!</h1>
        <FirstComponent account={this.state.account} />
      </>
    )
  }
}
