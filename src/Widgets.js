import React from 'react'
import './Widgets.css';
import SearchIcon from '@material-ui/icons/Search';
import {TwitterTimelineEmbed,TwitterShareButton,TwitterTweetEmbed} from 'react-twitter-embed'
function Widgets() {
    return (
        <div className="widgets">
                <div className="widgets__input">
                    <SearchIcon  className="widgets__search"/>
                    <input type="text" placeholder="Search Twitter"/>
                </div>

                <div className="widgets__widgetContainer">
                    <h2>whats's happening</h2>
                    <TwitterTweetEmbed tweetId={'933354946111705097'} />

                    <TwitterTimelineEmbed
                    sourceType="profile"
                    screenName="raviteja"
                    options={{height: 400}}
                    />

                    <TwitterShareButton
                        url={'https://facebook.com/saurabhnemade'}
                        options={{ text: '#reactjs is awesome', via: 'saurabhnemade' }}
                    />

                </div>
        </div>
    )
}

export default Widgets
