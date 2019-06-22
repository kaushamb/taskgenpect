import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';
import Header from "./header";
import Main from "./main"
class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React',
      name:"",
      id:"",
      img:""
    };
  }
  getdetails=async(e)=>{
    
    const api_call = await fetch(`https://reqres.in/api/users/${1}`);
    const data =await api_call.json();
    console.log(data);
    let name=data.data["last_name"];
    let id=data.data["id"];
    let img=data.data["avatar"];
    this.setState({
      name:name,
      id:id,
      img:img,
    })
  
  }
  render() {
    return (
      <div>
        <Header getdetails={this.getdetails}/>
        <Main name={this.state.name} id={this.state.id} img={this.state.img}/>
      
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
