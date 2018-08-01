import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import AutoFill from './AutoFill'

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      nameList : ['Apple', 'Microsoft', 'Haptik', 'Udacity', 'Udemy', 'Udauda', 'Zebra']
    }
  }

  render() {
    return (
      <div className="App">
        <AutoFill list={this.state.nameList}></AutoFill>
      </div>
    );
  }
}

export default App;
