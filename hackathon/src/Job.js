import React, { Component } from "react";
import './App.css';
import {jobList} from './App';

export default class Job extends Component {

  constructor(props) {
    super(props);

    this.state = jobList;
    
    }
    jobDetails(ind){
        this.setState({'jobBig': ind})
    }  

  render() {
    return (
      <div className="App">
          <div className="App-page">
            <h2>{this.state.jobs[this.state.jobBig]['jobTitle']}</h2>
            <p>{this.state.jobs[this.state.jobBig]['company']}</p>
            <p>{this.state.jobs[this.state.jobBig]['jobDescription']}</p>
            
            <h3>Requirements:</h3>
            
            <ul className="App-list" type="circle">
            {this.state.jobs[this.state.jobBig]['requirements'].map(req=>(
              <li><input className="App-checkbox" type="checkbox" />{req}</li>
          ))}
            </ul>
            <button onClick={event=>window.location.href='./interview'} className="App-job-apply">Begin Interview</button>
            <button onClick={event=>window.location.href='./'} className="App-job-apply">Back</button>

          </div>

        <header className="App-side">
          <h1>Other Jobs</h1>
          {this.state.jobs.map(job=>(
            <div className="App-job-container">
              <h2 className="App-job-title">{job.jobTitle}</h2>
              <p className="App-job-description">{job.jobDescription}</p>
              <button onClick={()=>this.jobDetails(job.jobId)} className="App-job-apply">Show More</button>
            </div>
          ))}
        </header>
      </div>
    );
  }

}