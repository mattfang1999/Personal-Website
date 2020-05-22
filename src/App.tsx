import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router,Route} from "react-router-dom";

import Navbar from './components/Navbar';
import Projects from './components/Projects';

import Home from './contents/Home';

function App() {
  return (
    <div className='App'>
    <Router>
      <div>
      <Navbar/>
      <Route exact path="/" component={Home}>
        <Home />
      </Route>

      <Projects />


      </div>

    </Router>
  
    </div>

    
  );
}

export default App;
