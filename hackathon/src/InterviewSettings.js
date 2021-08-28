import React, { Component } from "react";
import './App.css';
//import {writeFile()} from "./backend.py"


export default class InterviewSettings extends Component {

  constructor(props) {
    super(props);

    this.state = {
      salary:0,
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
  /*
  submitForm(){
    const obj = {"salary": this.state.salary, "description": this.state.description, 
      "requirements": this.state.requirements.split(","), "question1": this.state.question1,
      "question2": this.state.question2, "question3": this.state.question3
    };
    const data = JSON.stringify(obj);
    writeFile(data)
    
  }*/

  render() {
    return (
      <div className="App-interview-container">
        {/* <form action="/action_page.php"> */}

          <div className="App-interview App-left">

              <h1 className="App-title">Set up an Interview</h1>
              <h3>Salary:</h3>
              <input className="App-input" name="salary" type="number" placeholder="Salary Information" onChange={this.addVal.bind(this)}/>

              <div id="photo">
              <h3>Upload a photo of your store.</h3>

                  <input className="App-input" type="file" id="add-img" accept="image/*"/>
              </div>

              <div class="description">
                  <h3>Job Description:</h3>
                  <textarea className="App-input textarea" name="description" onChange={this.addVal.bind(this)} placeholder="What will your job entail?"></textarea>
              </div>


              <div class="requirements">
                  <h3>Job Requirements:</h3> 
                  <textarea className="App-input textarea" name="requirements" onChange={this.addVal.bind(this)} placeholder="What requirements do you have for your potential employees?"></textarea>
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

              <button className="App-button App-color-button" /*onClick={this.submitForm()}*/>Submit</button>
              <button onClick={event=>window.location.href='./'} className="App-button App-color-button">Back</button>
          </div>
        {/* </form> */}

    </div>
    );
  }

}

