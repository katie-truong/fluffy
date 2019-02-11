import React from 'react';
import axios from 'axios';
// import { throws } from 'assert';

class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      response: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    // alert('A name was submitted: ' + this.state.value);
    axios.get(`/user?username=${this.state.value}`)
    .then((res) => {
      this.props.onGettingData(res)
    })
    .catch((error)=> {
      console.log(error)
    })
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          u/
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default NameForm;