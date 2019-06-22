import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';
import Header from "./header";
class Main extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }
  
  render() {
    return (
      <div className="box">
        <div  className="img">
        <img src={this.props.img} alt="img"/>
        </div>
        
        <p className="para">id:{this.props.id}</p> 
        <p className="para2">Name:{this.props.name}</p>
        
      </div>
    );
  }
}

export default Main 
