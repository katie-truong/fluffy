import React from 'react';

class Profile extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (this.props.res) {
      return(
        <div>{this.props.res.map(item => <li key={item.id}>{item.subreddit}</li>)}</div>
      )
    } else {
      return null
    }
  }
}

export default Profile;