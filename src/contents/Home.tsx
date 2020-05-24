import React, { Component } from 'react'
import ReactTypingEffect from 'react-typing-effect';
import profilepic from '../images/matt_pic.png';



// const Home: React.FC<{}> = props => {
//     return (
//       <h1>This is the Home content</h1>
//     );
// }

class Home extends Component {
  render() {
    return (

      <div>
        <img src={profilepic} className="profilepic"></img>
        
          <div>
          <ReactTypingEffect className="typingeffect" text={['Hello! Nice to Meet You!']} speed={100} eraseDelay={400}/>
          </div>
          
          <div className='card-section'>
            <div className='card'>
              <p>Information About Card 1</p>
            </div>
            <div className='card'>
              <p>Information About Card 2</p>
            </div>
            <div className='card'>
              <p>Information About Card 3</p>
            </div>
            
          </div>
       
        <h4>Hello World</h4>

      </div>
  

 
        )
    }
 }
export default Home