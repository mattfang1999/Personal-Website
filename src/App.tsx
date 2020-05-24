import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import 'typeface-roboto';

//Component Imports
import Navbar from './components/Navbar';

//Rendering Imports
import Home from './contents/Home';
import Projects from './contents/Projects';
import About from './contents/About';
import Contact from './contents/Contact';

function App() {
  return (
    

    <Router>
      <div className = 'App'>
        <Navbar/>
        <Switch>
          
          <Route exact path='/'>
            <Home />
          </Route>

          <Route exact path='/about'>
            <About />
          </Route>
          
          <Route exact path='/projects'>
            <Projects />
          </Route>

          <Route exact path='/Contact'>
            <Contact />
          </Route>
        </Switch>


     </div>

    </Router>


  
    

    
  );
}

export default App;
