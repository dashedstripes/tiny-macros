import React, { Component } from 'react'
import './style.scss'

class Result extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isEditOpen: false
    }
  }
  render() {
    if(!this.state.isEditOpen) {
      return (
        <div className="result-container">
          <div className="result">
            <div className="icon"></div>
            <h4 className="type">ADDRESS</h4>
            <p className="content">123 Eastbourne Terrace</p>
            <button className="edit"></button>
            <button className="star"></button>
          </div>
        </div>
      );
    }else {
      return (
        <div className="result-container">
          <div className="result result-edit-open">
            <div className="icon"></div>
            <h4 className="type">ADDRESS</h4>
            <p className="content">123 Eastbourne Terrace</p>
            <button className="edit"></button>
            <button className="star"></button>
          </div>
          <input type="text" className="result-edit"/>
        </div>
      );
    }

  }
}

export default Result;
