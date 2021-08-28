import React, { Component } from "react";
import './interviewsettings.css';

export default class InterviewSettings extends Component {

  constructor(props) {
    super(props);

    this.state = {
    };


  }



  render() {
    return (
      <div id="container">
      <div id="left_div">
          <h1 id="page_title">Interview Settings</h1>
          <h4>Salary: </h4>

          <div id="photo">
              <form action="/action_page.php">
              <label for="img">Upload a photo of your store.</label>
              <input type="file" id="img" name="img" accept="image/*"/>
              <input type="submit"/>
          </form>
          </div>
          
          <h3>Job Description:</h3>

          <div class="description">
              <div contenteditable="true">What will your job entail?</div>
          </div>

          <h3>Job Requirements:</h3>

          <div class="requirements">
              <div contenteditable="true">What requirements do you have for your potential employees?</div>
          </div> 
      </div>

      <div id="right_div">
          <div contenteditable="true">Set a time limit for the interviews.</div>

          <div class="questions">
          
              <h1 id="q1">Question 1</h1>
              <div contenteditable="true">Input a question for your interviewee here.</div>
              <h1 id="q2">Question 2</h1>
              <div contenteditable="true">Input a question for your interviewee here.</div>
              
          </div>
      </div>
  </div>
    );
  }

}

