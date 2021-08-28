import React, { Component } from "react";
import './App.css';

export default class Interview extends Component {

  constructor(props) {
    super(props);

    this.state = {
    };


  }
  componentDidMount(){
    var video = document.querySelector("#videoElement");
    if (navigator.mediaDevices.getUserMedia) {
    navigator.mediaDevices.getUserMedia({ video: true })
        .then(function (stream) {
        video.srcObject = stream;
        })
        .catch(function (err0r) {
        console.log("Something went wrong!");
        })
      }
  }



  render() {
    return (
        <div className="App-interview-container">
            <div className="App-interview App-left">
                <div className="App-video">
                    <video autoplay="true" id="videoElement">
                    </video>
                </div>
            </div>
            <div className="App-interview App-right">
                <h1 className="App-title">Your interview</h1>
                <h3 className="App-description">Your interview will begin when you click begin, you will have 3 minutes to complete your interview</h3>
                <p className="App-text">Question 1: </p>
                <p className="App-text">Question 2: </p>
                <p className="App-text">Question 3: </p>
                <a className="App-button App-color-button">Begin</a>
            </div>
        </div>
      );
    }
}
