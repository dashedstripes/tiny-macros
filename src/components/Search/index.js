import React, { Component } from 'react'
import './style.scss'

class Search extends Component {
  render() {
    return (
      <div className="search-outer">
        <span className="search-icon"></span>
        <input type="text" placeholder="Search" className="search"/>
        <select className="service-switch">
          <option value="Zendesk">Zendesk</option>
        </select>
      </div>
    );
  }
}

export default Search;
