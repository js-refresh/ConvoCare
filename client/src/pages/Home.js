import React from 'react'
import Disclaimer from '../components/Disclaimer'
import Sidebar from '../components/Sidebar'
import './Home.css'
import { ReactComponent as Journal } from "../images/journal.svg";
import { ReactComponent as Community } from "../images/community.svg";
import { ReactComponent as Resources } from "../images/resources.svg";


export default function Home() {
  return (
    <div>
      <div className="page-wrapper">
        <Sidebar />
        <div className="page-container" style={{marginRight: '20vh'}}>
          <h3 style={{textAlign: 'center'}}>What does ConvoCare offer?</h3>
          <div className='row' style={{marginBottom: '25px'}}>
            <div className='col-12 col-md-4'><Resources className='home-svg' style={{height: '100px', width: "auto", display: "block", margin: "auto"}}/>
              <h5 style={{justifyContent: 'center', display: 'flex'}}>Resources</h5>
              <h6 style={{justifyContent: 'center', display: 'flex', textAlign: 'center', margin: '15px'}}>
                We host well-documented topic pages for mental health.
              </h6> 
            </div>
            <div className='col-12 col-md-4'>
              <Community className='home-svg' style={{height: '100px', width: "auto", display: "block", margin: "auto"}}/>
              <h5 style={{justifyContent: 'center', display: 'flex'}}>Community</h5>
              <h6 style={{justifyContent: 'center', display: 'flex', textAlign: 'center', margin: '15px'}}>
                Our ConvoCare Forum provide a welcome space to connect with our community. 
              </h6>
            </div>
            <div className='col-12 col-md-4'><Journal className='home-svg' style={{height: '100px', width: "auto", display: "block", margin: "auto"}}/>
              <h5 style={{justifyContent: 'center', display: 'flex'}}>Introspection</h5>
              <h6 style={{justifyContent: 'center', display: 'flex', textAlign: 'center', margin: '15px'}}>
                We offer a private journal for you to document anything you'd like. 
              </h6> 
            </div>
          </div>
          <h3>What is Mental Health?</h3>
          <p>Mental health includes our emotional, psychological, and social well-being. It affects how we think, feel, and act. It also helps determine how we handle stress, relate to others, and make choices. Mental health is important at every stage of life, from childhood and adolescence through adulthood.

        Over the course of your life, if you experience mental health problems, your thinking, mood, and behavior could be affected. Many factors contribute to mental health problems, including:
        <ul>
          <li>Biological  factors, such as genes or brain chemistry</li>
          <li>Life experiences, such as trauma or abuse</li>
          <li>Family history of mental health problems</li>
        </ul>
          Mental health problems are common but help is available. People with mental health problems can get better and many recover completely.
        </p>
        <h3>Early Warning Signs</h3>
        <p>Not sure if you or someone you know is living with mental health problems? Experiencing one or more of the following feelings or behaviors can be an early warning sign of a problem:
          <ul>
            <li>Eating or sleeping too much or too little</li>
            <li>Pulling away from people and usual activities</li>
            <li>Having low or no energy</li>
            <li>Feeling numb or like nothing matters</li>
            <li>Having unexplained aches and pains</li>
            <li>Feeling helpless or hopeless</li>
            <li>Smoking, drinking, or using drugs more than usual</li>
            <li>Feeling unusually confused, forgetful, on edge, angry, upset, worried or scared</li>
            <li>Yelling or fighting with family and friends</li>
            <li>Experiencing severe mood swings that cause problems in relationships</li>
            <li>Having persistent thoughts and memories you can't get out of your head</li>
            <li>Hearing voices or believing things that are not true</li>
            <li>Thinking of harming yourself or others</li>
            <li>Inability to perform daily tasks like taking care of your kids or getting to work or school</li>
          </ul>
        </p>
        <h3>Mental Health and Wellness</h3>
        <p>Positive mental health allows people to:
          <ul>
            <li>Realize their full potential</li>
            <li>Cope with the daily stress of life</li>
            <li>Work productively</li>
            <li>Make meaningful contributions to their families and communities</li>
          </ul>
        </p>
        <p>Ways to maintain a positive mental health include:
          <ul>
            <li>Get professional help</li>
            <li>Connecting and talking to others</li>
            <li>Staying positive</li>
            <li>Being physically active</li>
            <li>Getting enough sleep</li>
            <li>Developing coping skills</li>
          </ul>
        </p>
          <div className="mission-statement">
            <h3>Mission Statement</h3>
            <p>The purpose of this website is to:
              <ul>
                <li>Give useful information about mental health disorders</li>
                <li>Discuss mental health topics in the Thread section</li>
                <li>Allow users to document their daily moods/feelings privately in the Journal section</li>
              </ul>
            </p>
          </div>  
            <Disclaimer />
        </div>
      </div>
    </div>
  )
}
