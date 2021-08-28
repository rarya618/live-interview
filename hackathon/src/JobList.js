import React, { Component } from "react";
import './App.css';

export default class JobList extends Component {

  constructor(props) {
    super(props);

    this.state = {
    };


  }



  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Recommended for you</h1>
          <div className="App-job-container">
            <div className="App-job-image">
              <p><img src="https://via.placeholder.com/300"></img></p>
            </div>
            <div className="App-job-content">
            <h2 className="App-job-title">Sample Job 1</h2>
              <p className="App-job-description">Lorem Ipsum</p>
              <button onClick={event=>window.location.href='./job-1'} className="App-job-apply">Apply</button>
            </div>
          </div>
          <div className="App-job-container">
            <h2 className="App-job-title">Sample Job 2</h2>
            <p className="App-job-description">Job Description</p>
            <button onClick={event=>window.location.href='./job'} className="App-job-apply">Apply</button>
          </div>
          <div className="App-job-container">
            <h2 className="App-job-title">Sample Job 3</h2>
            <p className="App-job-description">Job Description</p>
            <button onClick={event=>window.location.href='./job'} className="App-job-apply">Apply</button>
          </div>
        </header>
      </div>
    );
  }

}