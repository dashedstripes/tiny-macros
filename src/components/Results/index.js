import React, { Component } from 'react'
import Result from '../Result'
import './style.scss'

class Results extends Component {
  render() {
    return (
      <div className="results">
        <Result/>
        <Result/>
        <Result/>
        <Result/>
        <Result/>
        <Result/>
        <Result/>
        <Result/>
      </div>
    );
  }
}

export default Results;
