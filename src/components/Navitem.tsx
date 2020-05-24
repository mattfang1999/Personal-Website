import React, { Component } from 'react';
import { Link } from "react-router-dom";

interface INavitem {
    name:string
    tolink: string
  }

interface IState{
    state: boolean;
}


export class Navitem extends React.Component<INavitem, IState> {

    constructor(props){
        super(props);
        this.state = {
            state: false
        };
      }


    render() {
      return (     
        <Link to={this.props.tolink} >
            <li>{this.props.name}</li>
        </Link>
                
        
        
            );
    }
  }



export default Navitem;