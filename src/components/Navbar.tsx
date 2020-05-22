import React, { Component } from 'react';
import Navitem from './Navitem';





//NavItem gets passed in two props
//1. name of the Navigation item
//2. link that clicking on the Navigation item will lead to 
const Navbar: React.FC<{}> = props => {
    return (
    <nav> 
      <div id='nav-name'>
        <h1>Matthew Fang</h1>
      </div>
      <div id='nav-space'>
        <Navitem name="Home" tolink="/" ></Navitem>
        <Navitem name="About Me" tolink="/about" ></Navitem>
        <Navitem name="Projects" tolink="/projects" ></Navitem>
        <Navitem name="Contact Me" tolink="/contact" ></Navitem>

      </div>
           
    </nav>

    );
}

export default Navbar;