import React, { Component } from 'react'
import ReactTypingEffect from 'react-typing-effect';
import profilepic from '../images/matt_pic.png';
import code from '../images/code.png';
import idea from '../images/idea.png';
import paint from '../images/paint.png';




// const Home: React.FC<{}> = props => {
//     return (
//       <h1>This is the Home content</h1>
//     );
// }

class Home extends Component {
  render() {
    return (

      <div className='container'>
        <img src={profilepic} className="profilepic"></img>
        
          <div>
          <ReactTypingEffect className="typingeffect" text={['Hello! Nice to Meet You!']} speed={100} eraseDelay={400}/>
          </div>
          
          <div className='card-section'>
            <div className='card'>
              <img src={idea} className="pics"></img>
              <div className='text-container'>
                <h3>UX Research</h3>
                <p>Through empathizing with users and understanding their pain points, I love brainstorming cool solutions to best fit their needs!</p>
              </div>
              
            </div>
            <div className='card'>
              <img src={paint} className="pics"></img>
              <div className='text-container'>
                <h3>UI Design</h3>
                <p>From low-fi concepts to hi-fidelity colorful designs, I love using Figma to create wireframes to communicate my solutions!</p>
              </div>
            </div>
            <div className='card'>
              <img src={code} className='pics'></img>
              <div className='text-container'>
                <h3>Coding</h3>
                <p>Using powerful bits and bytes, I transform those colorful ideas into real working websites and apps for the world to enjoy!</p>
              </div>
            </div>
          </div>

         
       
        <h4>Hello World</h4>

      </div>
  

 
        )
    }
 }
export default Home