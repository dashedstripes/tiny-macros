import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setSearchInput, setResults } from '../../actions/search'
import './style.scss'

class Search extends Component {

  handleChange(e) {
    this.props.dispatch(setSearchInput(e.target.value))

    let results = []

    for(let key in this.props.fields.userFields) {
      if(key.fuzzy(this.props.search.input)) {
        if(this.props.fields.userFields[key] != null && typeof this.props.fields.userFields[key] != 'object' && this.props.fields.userFields[key] != '' && typeof this.props.fields.userFields[key] != 'boolean') {
          results.push({
            type: 'USER_FIELD',
            key: key,
            value: this.props.fields.userFields[key]
          })
        }
      }
    }

    this.props.dispatch(setResults(results))
  }

  render() {
    return (
      <div className="search-outer">
        <span className="search-icon"></span>
        <input type="text" placeholder="Search" className="search" onChange={this.handleChange.bind(this)}/>
        <select className="service-switch">
          <option value="Zendesk">Zendesk</option>
        </select>
      </div>
    );
  }
}

String.prototype.fuzzy = function (s) {
  let hay = this.toLowerCase(), i = 0, n = -1, l
  s = s.toLowerCase()
  for (; l = s[i++] ;) if (!~(n = hay.indexOf(l, n + 1))) return false
  return true
}

function mapStateToProps(state) {
  return state
}

export default connect(mapStateToProps)(Search);
