import React, { Component } from "react";
import './App.css';
//import {writeFile()} from "./backend.py"

import {jobList} from './App';


export default class InterviewSettings extends Component {

  constructor(props) {
    super(props);

    this.state = {
      name:"",
      company:"",
      description:"",
      requirements:"",
      question1:"",
      question2:"",
      question3:"",
    };


  }

  addVal(e){
    const val= e.target.value
    const name =e.target.name
    this.setState({[name]:val})
  }
  
  submitForm(){
    const obj = {"name": this.state.name, "company": this.state.company, "description": this.state.description, 
      "requirements": this.state.requirements.split(","), "question1": this.state.question1,
      "question2": this.state.question2, "question3": this.state.question3
    };

    var jobId = jobList.jobs.length;

    var jobTitle = obj.name;
    var company = obj.company;
    var jobDescription = obj.description;
    var requirements = obj.requirements;
    var questions = [obj.question1,obj.question2,obj.question3];

    jobList.jobs.push({jobId, jobTitle, company, jobDescription, requirements, questions})
    jobList.jobs.map(job=>{console.log(job)})
    // const data = JSON.stringify(obj);
    // writeFile(data)
    
  }

  render() {
    return (
      <div className="App-interview-container">
        {/* <form action="/action_page.php"> */}

          <div className="App-interview App-left">

              <h1 className="App-title">Set up an Interview</h1>
              <h3>Job Name:</h3>
              <input className="App-input" name="name" type="text" placeholder="Job Name" onChange={this.addVal.bind(this)}/>

              <h3>Employer Name:</h3>
              <input className="App-input" name="company" type="text" placeholder="Employer Name" onChange={this.addVal.bind(this)}/>

              {/* <div id="photo">
                <h3>Upload a photo of your store.</h3>

                <input className="App-input" type="file" id="add-img" accept="image/*"/>
              </div> */}

              <div class="description">
                  <h3>Job Description:</h3>
                  <textarea className="App-input textarea" name="description" onChange={this.addVal.bind(this)} placeholder="What will your job entail?"></textarea>
              </div>


              <div class="requirements">
                  <h3>Job Requirements:</h3> 
                  <textarea className="App-input textarea" name="requirements" onChange={this.addVal.bind(this)} placeholder="What requirements do you have for your potential employees? (Use commas to separate multiple entries)"></textarea>
              </div>
          </div>

          <div className="App-interview App-right">

              <div class="questions">
              
                  <h2>Question 1</h2>
                  <textarea className="App-input textarea" name="question1" placeholder="Input a question for your interviewee here." onChange={this.addVal.bind(this)}></textarea>
                  
                  <h2>Question 2</h2>
                  <textarea className="App-input textarea" name="question2" placeholder="Input a question for your interviewee here." onChange={this.addVal.bind(this)}></textarea>

                  <h2>Question 3</h2>
                  <textarea className="App-input textarea" name="question3" placeholder="Input a question for your interviewee here." onChange={this.addVal.bind(this)}></textarea>

                  
              </div>

              <button className="App-button App-color-button" onClick={()=>{this.submitForm()}}>Submit</button>
              <button onClick={event=>window.location.href='./'} className="App-button App-color-button">Back</button>
          </div>
        {/* </form> */}

    </div>
    );
  }

}

