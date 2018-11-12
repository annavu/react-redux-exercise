import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Ninjas from './components/Ninjas';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: 'John',
      ninjas: [
        {name: "Ryu", age:30, belt: 'black', id:1},
        {name: "Yoshi", age:25, belt: 'green', id:2},
        {name: "Crystal", age:20, belt: 'pink', id:3},
      ]
    }
  }

  handleClick(){
   console.log(this.state)
  }

  handleChange(e) {
    console.log(e.target.value)
    this.setState({
      name:e.target.value
    })
  }

  handleSubmit(e) {
    e.preventDefault()
    
  }




  render() {
    return (
      <div className="App">
        <p>Hi my name is {this.state.name}</p>
        <button onClick={this.handleClick.bind(this)}>click</button>

        <form onSubmit={this.handleSubmit.bind(this)}>
          <input type="text" onChange={this.handleChange.bind(this)}/>
          <button>Submit</button>
        </form>
        <Ninjas ninjas={this.state.ninjas}/>
      </div>
    );
  }
}

export default App;
