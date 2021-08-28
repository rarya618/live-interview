import React, { Component } from "react";
import './interview.css';

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
        <div class="setting">
            <div class="column left">
                <div class="container">
                    <video autoplay="true" id="videoElement">
                    </video>
                </div>
            </div>
            <div class="column right">
                <h1 class ="title">Your interview</h1><br></br>
                <h3 class = "description">Your interview will begin when you click begin, you will have 3 minutes to complete your interview</h3>
                <br></br>
                <p class="question">Question 1: </p>
                <p class="question">Question 1: </p>
                <p class="question">Question 1: </p>
                <a class="button8">BEGIN</a>
            </div>
        </div>
      );
    }
}
