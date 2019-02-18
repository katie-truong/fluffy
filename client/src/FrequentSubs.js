import React from 'react';

class FrequentSubs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      countObj: {}
    }
  }

  render() {
  //   if (this.props.res) {
  //     return(
  //       <div>
  //         <div>{this.props.res.map(item => <div key={item.id}>{item.subreddit}</div>)}</div>
  //       </div>
  //     )
  //   } else {
  //     return null
  //   }
    if (this.props.res) {
      let countObj = {}
      let item;
      for (item in this.props.res) {
        if (countObj.hasOwnProperty(this.props.res[item].subreddit)) {
          countObj[this.props.res[item].subreddit] += 1
        } else {
          countObj[this.props.res[item].subreddit] = 1
        }
      }
      console.log(countObj)
      return (
        <div>
          Data
        </div>
      )
    } else {
      return (
        <div></div>
      )
    }
  }
}

export default FrequentSubs;