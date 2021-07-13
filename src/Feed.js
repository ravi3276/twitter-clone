import { Avatar } from '@material-ui/core'
import React from 'react'
import './Feed.css'
import Post from './Post'
import TweetBox from './TweetBox'
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
function Feed() {
    return (
        <div className="feed">
            <div className="feed__header">
            <h2>Home</h2>
            </div>

           <TweetBox />

           <Post 
           Avatar={Avatar}
           displayName="raviteja3276" 
           userName="ravi27"
           msg="hkafuahdjsbdajhgfudhasjdafgasdajsgfaushdakfau"
            image=""
            timestamp="13h ago"
            VerifiedUserIcon={VerifiedUserIcon}
           />
        </div>
    )
}

export default Feed
