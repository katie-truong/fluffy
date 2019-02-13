import React, { Component } from 'react';
import NameForm from './NameForm.js';
import Profile from './Profile.js';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      response: ''
    };
    this.getResponse = this.getResponse.bind(this)
  }

  getResponse(res) {
    this.setState({
      response: res.data
    }, () => {
      console.log(this.state.response)
    })
  }

  render() {
    return (
      <div>
        <NameForm onGettingData={this.getResponse}/>
        <Profile res={this.state.response}/>
      </div>
    );
  }
}

export default App;