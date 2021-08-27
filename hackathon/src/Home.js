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
          <h3>
            <a  className="App-button App-link" href="#">Interviewer</a>
          </h3>
        
          <h3>
            <button onClick={event=>window.location.href='./Job'} className="App-button App-link" >Interviewee</button>
          </h3>
          
        </header>
      </div>
    );
  }

}



