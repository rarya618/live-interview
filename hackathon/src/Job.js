import React, { Component } from "react";
import './App.css';
import myImg from './job.jpeg'

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
        <div style={styles.body}>
            <div style={styles.left}>
                <h style={{fontSize:'30px'}}>{this.state.jobs[this.state.jobBig]['jobTitle']}</h>
                <br></br>
                <div style={styles.imgg2}></div>
                <p>{this.state.jobs[this.state.jobBig]['company']}</p>
                <p>{this.state.jobs[this.state.jobBig]['jobDescription']}</p>
                {this.state.jobs[this.state.jobBig]['requirements'].map(req=>(
                    <li>{req}</li>
                ))}
                <button style={styles.button}>Start interview</button>
            </div>
            <div style={styles.right}>
                {this.state.jobs.map(job=>(
                    <div onClick={()=>this.jobDetails(job.jobId)} style={styles.jobBox}>
                    
                        <div style={styles.imgg}></div>
                        <div style={{padding:20}}>
                            <p   style={{fontSize:'15px'}}>{job.jobTitle}</p>
                            <p style={{fontSize:'10px'}}>{job.company}</p>
                            <p style={{fontSize:'10px'}}>{job.jobDescription}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>

    );
  }

}

const styles = {
    body:{
        display:'flex',
        flexDirection:'row',
        padding:50,
        height:'75vh',
        margin:0,

    },
    left:{
        position: 'relative',
        width: '40%',
        padding: 20,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 2,
        height:'75vh',


    },
    right:{
        position: 'relative',
        width: '60%',
        padding: 50,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: '#d4e669',
        borderRadius: 2,
        height:'75vh',
        'overflow-y': 'scroll',

    },
    jobBox:{
        padding: 3,
        backgroundColor: 'white',
        borderRadius: 5,
        marginTop: '4%',
        display:'flex',
        flexDirection:'row',

    },
    imgg:{
        backgroundImage:`url(${myImg})`,
        height: '20vh',
        width:'20vw',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
    },
    imgg2:{
        backgroundImage:`url(${myImg})`,
        height: '30vh',
        width:'30vw',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
    },
    button:{
        position:'absolute' ,
        bottom:0,
        width:'30%',
        height:'10%',
        backgroundColor:'yellow',
    },
};