import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';
import Header from "./header";
class Header extends Component {
  constructor() {
    super();
    this.state = {
      name: "HR"
    };
  }
  change(e){
    console.log("hi");
    let d=e.target.value;
    console.log(d);
    this.setState({
      name:d,
    })
  }
  render() {
    return (
      <div>
        <select onChange={this.change.bind(this)} className="department" name="department">
          <option value="select">Select department</option>
          <option value="HR">HR</option>
          <option value="Engineering">Engineering</option>
          
        </select>
        {this.state.name==="HR"?
        <select name="empid">
          <option value="">1</option>
          <option value="">2</option>
          <option value="">3</option>
          <option value="">4</option>
          <option value="">5</option>
        </select>:
        <select>
          <option value="">6</option>
          <option value="">7</option>
          <option value="">8</option>
          <option value="">9</option>
          <option value="">10</option>
        </select>}


        <button onClick={this.props.getdetails}>Get details</button>
        <button>Clear</button>
      </div>
    );
  }
}

export default Header 
