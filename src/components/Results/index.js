import React, { Component } from 'react'
import { connect } from 'react-redux'
import Result from '../Result'
import './style.scss'

class Results extends Component {

  render() {
    if(this.props.search.results !== undefined) {
      if(this.props.search.results.length != 0) {
        return (
          <div className="results">
            { this.props.search.results.map((result, index) => {
              return (
                <Result key={index} type={ result.key } content={ result.value }/>
              )
            })}
          </div>
        )
      }else {
        return this.noResults()
      }
    }else {
      return this.noResults()
    }
  }

  noResults() {
    return (
      <div className="results">
        No results found.
      </div>
    )
  }
}

function mapStateToProps(state) {
  return state
}

export default connect(mapStateToProps)(Results);
