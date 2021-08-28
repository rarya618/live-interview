import React, { Component } from "react";
import './App.css';

export default class Job extends Component {

  constructor(props) {
    super(props);

    this.state = {
    };


  }



  render() {
    return (
      <div className="App">
          <div className="App-job-page">
            <h2>Sample Job 1</h2>
            <p>Salary: 100k</p>
            <p>Lorem ipsum dolor sit amet, consectetur adip</p>
            
            <h3>Requirements:</h3>
            <ul className="App-list" type="circle">
              <li><input className="App-checkbox" type="checkbox" />Requirement 1</li>
              <li><input className="App-checkbox" type="checkbox" />Requirement 2</li>
              <li><input className="App-checkbox" type="checkbox" />Requirement 3</li>
            </ul>
            <button className="App-job-apply">Begin Interview</button>

          </div>

        <header className="App-header">
          <h1>Other Jobs</h1>
          <div className="App-job-container">
            <h2 className="App-job-title">Sample Job 2</h2>
            <p className="App-job-description">Job Description</p>
            <button className="App-job-apply">Apply</button>
          </div>
        </header>
      </div>
    );
  }

}