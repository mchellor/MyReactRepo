import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>New React App</h1>
        <Person name="Lulu" age="31"></Person>
        <Person name="Gary" age="30">My hobbie is hiking</Person>
      </div>
    );
  }
}

export default App;
