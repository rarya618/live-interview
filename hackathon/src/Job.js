import React, { Component } from "react";
import './App.css';

export default class Job extends Component {

  constructor(props) {
    super(props);

    this.state = {
      jobs:[
          {
              jobId:0,
              jobTitle:"Relief Store Manager",
              company:"JOYN",
              jobDescription:"This role will involve a roster across a variety of locations in a given region to assist the Store Management team in covering gaps in rosters. This role requires a very adaptable person who enjoys a changing environment and is happy to travel.",
              requirements:["High level of computer literacy", "Current full driver's license","Ability to work on the weekends as required"]
          },
          {
              jobId:1,
              jobTitle:"Senior Administration Officer",
              company:"Department of Communities and Justice",
              jobDescription:"The Senior Administration Officer provides a broad range of administrative services and leverages extensive business unit knowledge to support the unit's program of work and facilitate the delivery of business operations.",
              requirements:["Ability to monitor and maintain quality control and compliance procedures","Exceptional written and verbal communication","High level of autonomy and ensures work assignments and projects are delivered on time"]

          },
          {
              jobId:2,
              jobTitle:"Pick Packers and Labourers",
              company:"Australian Personnel Solutions",
              jobDescription:"APS currently looking for skilled pickers and packers/Labourers  to join our growing teams located in Truganina, Derrimut, Laverton and Footscray. Our clients are able to offer consistent Monday - Friday on-going roles for the right candidates!",
              requirements:["Experience picking and packing (preferred but not essential)",
              "RF scanning experience (preferred but not essential)",
              "2 valid referees to verify your work history and experience",
              "Available Monday to Friday"]

          },
          {
              jobId:3,
              jobTitle:"Pick Packers and Labourers",
              company:"Australian Personnel Solutions",
              jobDescription:"APS currently looking for skilled pickers and packers/Labourers  to join our growing teams located in Truganina, Derrimut, Laverton and Footscray. Our clients are able to offer consistent Monday - Friday on-going roles for the right candidates!",
              requirements:["Experience picking and packing (preferred but not essential)",
              "RF scanning experience (preferred but not essential)",
              "2 valid referees to verify your work history and experience",
              "Available Monday to Friday"]

          },
          
        ],
        jobBig:0,
      };
    

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

          </div>

        <header className="App-header">
          <h1>Other Jobs</h1>
          {this.state.jobs.map(job=>(
            <div className="App-job-container">
              <h2 className="App-job-title">{job.jobTitle}</h2>
              <p className="App-job-description">{job.jobDescription}</p>
              <button onClick={()=>this.jobDetails(job.jobId)} className="App-job-apply">Apply</button>
            </div>
          ))}
        </header>
      </div>
    );
  }

}