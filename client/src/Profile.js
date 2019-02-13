import React from 'react';
import FrequentSubs from './FrequentSubs.js'
// import WordCloud from './WordCloud.js'

const Profile = ({res}) => {
  return (
    <div>
      <FrequentSubs res={res}/>
      {/* <WordCloud res={res}/> */}
    </div>
  )
}

export default Profile;