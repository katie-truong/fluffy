import React, { Component } from 'react';
import NameForm from './NameForm.js';
import './App.css';

class App extends Component {
  state = {users: []}

  componentDidMount() {
    fetch('/users')
      .then(res => res.json())
      .then(users => this.setState({ users }));
  }

  render() {
    return (
      <NameForm/>
    );
  }
}

export default App;