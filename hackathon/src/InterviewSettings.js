import React, { Component } from "react";
import './App.css';

export default class InterviewSettings extends Component {

  constructor(props) {
    super(props);

    this.state = {
    };


  }

  render() {
    return (
      <div className="App-interview-container">
        {/* <form action="/action_page.php"> */}

          <div className="App-interview App-left">

              <h1 className="App-title">Set up an Interview</h1>
              <h3>Salary:</h3>
              <input className="App-input" type="number" placeholder="Salary Information"/>

              <div id="photo">
              <h3>Upload a photo of your store.</h3>

                  <input className="App-input" type="file" id="add-img" accept="image/*"/>
              </div>

              <div class="description">
                  <h3>Job Description:</h3>
                  <textarea className="App-input textarea" name="description" placeholder="What will your job entail?"></textarea>
              </div>


              <div class="requirements">
                  <h3>Job Requirements:</h3> 
                  <textarea className="App-input textarea" name="requirements" placeholder="What requirements do you have for your potential employees?"></textarea>
              </div>
          </div>

          <div className="App-interview App-right">

              <div class="questions">
              
                  <h2>Question 1</h2>
                  <textarea className="App-input textarea" name="question-1" placeholder="Input a question for your interviewee here."></textarea>
                  
                  <h2>Question 2</h2>
                  <textarea className="App-input textarea" name="question-2" placeholder="Input a question for your interviewee here."></textarea>

                  <h2>Question 3</h2>
                  <textarea className="App-input textarea" name="question-3" placeholder="Input a question for your interviewee here."></textarea>

                  
              </div>

              <button className="App-button App-color-button">Submit</button>
          </div>
        {/* </form> */}

    </div>
    );
  }

}

