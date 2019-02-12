import React from 'react';

class Profile extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (this.props.res) {
      return(
        <div>
          <div>{this.props.res.map(item => <div key={item.id}>{item.body}</div>)}</div>
        </div>
      )
    } else {
      return null
    }
  }
}

export default Profile;