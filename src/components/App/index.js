import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setTicket, setUser, setUserFields } from '../../actions/fields'
import Results from '../Results'
import Search from '../Search'
import './style.scss'

class App extends Component {
  constructor(props) {
    super(props)

    client.get('ticket').then((ticket) => {
      this.props.dispatch(setTicket(ticket.ticket))
      return client.request(`/api/v2/users/${ticket.ticket.requester.id}`)
    }, (err) => {
      console.log(err)
    }).then((user) => {
      this.props.dispatch(setUser(user.user))
      this.props.dispatch(setUserFields(user.user.user_fields))
    }, (err) => {
      console.log(err)
    })

  }
  render() {
    return (
      <div className="App">
        <Results />
        <Search />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return state
}

export default connect(mapStateToProps)(App);
