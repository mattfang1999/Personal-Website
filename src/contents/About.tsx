import React from 'react';
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import { withStyles } from '@material-ui/core/styles';
import code from '../images/code.png';


const useStyles = makeStyles({
  aboutSection: {
    color:"red",
  }
});
class About extends React.Component {
  render() {
    return (
    <div className='about-section'>
      <div className='about-details'>
        <h1>A Little More About Me</h1>
        <p>My career goal is to design solutions for people 
              so they can not only have better lives, but also empower
               others to do so. As a Christian, I also strongly believe
               in the value of serving others, which strongly ties into a 
               core tenet of HCI - to not design for yourself, but with your
               users in mind. My faith, my deesire to see other people succeed, 
               and my love for hearing the stories of others is what gets me out of 
               bed every morning to perform my work!</p>
      </div>
      <div className='cmu-body'>
        <div className='cmu-header'>
        <h2>My Journey @ Carnegie Mellon University</h2>
        </div>
        
        <div className='cmu-row'>
          <div className='cmu-section'>
            <div className='cmu-section-left'>
              <h3>Year 1</h3>
              <img src={code}></img>
            </div>
            <div className='cmu-section-right'>
              <h4>Starting off as an Engineer</h4>
                <ul>
                  <li><b>Major:</b> <i>Electrical and Computer Engineer</i></li>
                  <li><b>Skills Learned:</b> <i>Python, C, a bunch of math</i></li>
                  <li><b>Lessons Learned:</b> <i>I'm not sure if I like programming and can make a career out of this...</i></li>
                </ul>
              </div>
            </div>

            <div className='cmu-section'>
              <div className='cmu-section-left'>
                <h3>Year 2</h3>
                <img src={code}></img>
              </div>
              <div className='cmu-section-right'>
                <h4>Discovering My Inner Designer</h4>
                  <ul>
                    <li><b>Major:</b> <i>In the Midst of Transferring</i></li>
                    <li><b>Skills Learned:</b> <i>UX & UI Skills</i></li>
                    <li><b>Lessons Learned:</b> <i>I never knew I had a creative side! Design may be my thing!</i></li>
                  </ul>
                </div>
              </div>
          </div>

      <div className='cmu-row'>
        <div className='cmu-section'>
              <div className='cmu-section-left'>
                <h3>Year 3</h3>
                <img src={code}></img>
              </div>
              <div className='cmu-section-right'>
                <h4>Facing My Inner Programming Fears</h4>
                  <ul>
                    <li><b>Major:</b> <i>HCI + Information Systems</i></li>
                    <li><b>Skills Learned:</b> <i>Front-End Development & a bit of web dev</i></li>
                    <li><b>Lessons Learned:</b> <i>You know, programming isn't as bad as I thought it would be!</i></li>
                  </ul>
                </div>
          </div>
          <div className='cmu-section'>
              <div className='cmu-section-left'>
                <h3>Year 4</h3>
                <img src={code}></img>
              </div>
              <div className='cmu-section-right'>
                <h4>Ready to Face Senior Year as a Designer and Programmer</h4>
                  <ul>
                    <li><b>Major:</b> <i>HCI + Information Systems</i></li>
                    <li><b>Skills Learned:</b> <i>TBD</i></li>
                    <li><b>Lessons Learned:</b> <i>TBD</i></li>
                  </ul>
                </div>
        </div> 
      </div>
    </div>
  </div>
      
   
    );
  }
}

export default About;