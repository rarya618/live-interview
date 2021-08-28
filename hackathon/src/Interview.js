import React, { Component } from "react";
import './App.css';
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import { useReactMediaRecorder } from "react-media-recorder";


const Video = () => {
  const {
    status,
    startRecording,
    stopRecording,
    mediaBlobUrl,
  } = useReactMediaRecorder({ video: true });

  function saveVideo(vid){
    console.log("this is final vid" + vid);
  };
  return (
    <body>
      <div>
        <p className="hidden">{status}</p>
        <button className="hidden" id="startRecord" onClick={startRecording}>Start Recording</button>
        <button className="hidden" id="endRecord" onClick={stopRecording, saveVideo({mediaBlobUrl})}>Stop Recording</button>
        <video className="hidden" src={mediaBlobUrl} controls autoPlay />
      </div>
    </body>
  );
};

export default class Interview extends Component {

  constructor(props) {
    super(props);

    this.state = {
        startTimer:false,
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

  calcTime(time){
    console.log(time);
  }
  timesup(){
    console.log("times up")
    alert("Your interview is over! You will be in touch with the employer soon")
    document.getElementById("endRecord").click()
    window.location.href="./job"
    
  }
  startTime(){
    this.setState({'startTimer':true})
    document.getElementById("startRecord").click()

  }

  render() {
    return (
        <div className="App-interview-container">
            <div className="App-interview App-left">
                <div className="App-video">
                    <video autoplay="true" id="videoElement">
                    </video>
                    <Video/>
                </div>
            </div>
            <div className="App-interview App-right">
                <h1 className="App-title">Your interview</h1>
                <h3 className="App-description">Your interview will begin when you click begin, you will have 3 minutes to complete your interview</h3>
                <p className="App-text">Question 1: </p>
                <p className="App-text">Question 2: </p>
                <p className="App-text">Question 3: </p>
                <a className="App-button App-color-button" onClick={()=>this.startTime()}>Begin</a>
                <a className="App-button App-color-button" onClick={()=>this.timesup()}>End Now</a>
                
                <div className="App-timer">
                    <CountdownCircleTimer
                        isPlaying= {this.state.startTimer}
                        duration={180}
                        colors={[["rgb(212, 230, 105)", 0.33], ["#F7B801", 0.33], ["rgb(130, 174, 68)"]]}
                        onComplete={() => {this.timesup(); return[false, 1000]}}
                        >
                        {({remainingTime, animatedColor})=>(
                            <div>
                            <span style={{fontWeight:'bold', textAlign:'center'}}>{remainingTime} </span><br></br>
                            <span style={{fontWeight:'normal', textAlign:'center'}}>seconds <br></br>remaining</span>
                            </div>
                        )}
                    </CountdownCircleTimer>
                </div>
            </div>
        </div>
      );
    }
}
