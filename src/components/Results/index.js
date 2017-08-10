import React, { Component } from 'react'
import { connect } from 'react-redux'
import Result from '../Result'
import './style.scss'

class Results extends Component {

  render() {
    if(this.props.search.results !== undefined) {
      return (
        <div className="results">
          { this.props.search.results.map((result) => {
            return (
              <Result type={ result.key } content={ result.value }/>
            )
          })}
        </div>
      )
    }else {
      return (
        <div className="results">
          No results found.
        </div>
      )
    }
  }
}

function mapStateToProps(state) {
  return state
}

export default connect(mapStateToProps)(Results);
