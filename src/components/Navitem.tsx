import React, { Component } from 'react';
import { Link, NavLink } from "react-router-dom";

interface INavitem {
    name:string
    tolink: string
  }




export class Navitem extends React.Component<INavitem> {


    render() {
      return (    
        <NavLink exact to={this.props.tolink} activeClassName="current"> 
                <li>{this.props.name}</li>    
        </NavLink>              
        );
    }
  }



export default Navitem;