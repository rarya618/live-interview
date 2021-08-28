import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import './App.css';

import Home from './Home'
import Job from './Job'
import Interview from './Interview';
import InterviewSettings from './InterviewSettings';

var jobList = {
  jobs:[
      {
          jobId:0,
          jobTitle:"Relief Store Manager",
          company:"JOYN",
          jobDescription:"This role will involve a roster across a variety of locations in a given region to assist the Store Management team in covering gaps in rosters. This role requires a very adaptable person who enjoys a changing environment and is happy to travel.",
          requirements:["High level of computer literacy", "Current full driver's license","Ability to work on the weekends as required"],
          questions:["Tell me about yourself and your work experience.", "Why are you the right fit to succeed in this role?","What are your salary expectations?"]
      },
      {
          jobId:1,
          jobTitle:"Senior Administration Officer",
          company:"Department of Communities and Justice",
          jobDescription:"The Senior Administration Officer provides a broad range of administrative services and leverages extensive business unit knowledge to support the unit's program of work and facilitate the delivery of business operations.",
          requirements:["Ability to monitor and maintain quality control and compliance procedures","Exceptional written and verbal communication","High level of autonomy and ensures work assignments and projects are delivered on time"],
          questions:["What are your salary expectations?", "Tell me about yourself and your work experience.", "Why are you the right fit to succeed in this role?"]

      },
      {
          jobId:2,
          jobTitle:"Pick Packers and Labourers",
          company:"Australian Personnel Solutions",
          jobDescription:"APS currently looking for skilled pickers and packers/Labourers  to join our growing teams located in Truganina, Derrimut, Laverton and Footscray. Our clients are able to offer consistent Monday - Friday on-going roles for the right candidates!",
          requirements:["Experience picking and packing (preferred but not essential)",
          "RF scanning experience (preferred but not essential)",
          "2 valid referees to verify your work history and experience",
          "Available Monday to Friday"],
          questions:["Why are you the right fit to succeed in this role?", "Tell me about yourself and your work experience.", "What are your salary expectations?"]

      },
      
    ],
    jobBig:0,
}

export {jobList};

class App extends React.Component {
  constructor() {
    super();
    this.state = {
    }
  }

  componentDidMount() {
  }

  render() {
    return (
      <BrowserRouter>
        <div>
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/job" component={Job}/>
            <Route path = "/interview" component={Interview}/>
            <Route path = "/interview-settings" component={InterviewSettings}/>
          </Switch>
        </div>
      </BrowserRouter >
    );
  }
}

export default App;
