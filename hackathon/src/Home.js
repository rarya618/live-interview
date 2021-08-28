import React, { Component } from "react";
import './App.css';

export default class Home extends Component {

  constructor(props) {
    super(props);

    this.state = {
    };


  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Which one are you?</h1>
          <button onClick={event=>window.location.href='./job'} className="App-button App-link">I am an Employer!</button>
          <button onClick={event=>window.location.href='./job-list'} className="App-button App-link">I am an Applicant!</button>
          
        </header>
      </div>
    );
  }

}



