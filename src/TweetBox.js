import { Button } from '@material-ui/core'
import { Avatar } from '@material-ui/core'
import React from 'react'
import './TweetBox.css'
function TweetBox() {
    return (
        <div className="tweetBox">
            <form>
                <div className="tweetBox__input">
                    <Avatar />
                    <input type="text" placeholder="whats happening?" />
                </div>
                <Button className="tweetBox__btn">Tweet</Button>
            </form>
        </div>
    )
}

export default TweetBox
