import React from 'react'
import './Post.css';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import RepeatIcon from '@material-ui/icons/Repeat';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import PublicIcon from '@material-ui/icons/Public';

function Post({Avatar,displayName,userName,image,timestamp,msg,VerifiedUserIcon}) {
    return (
        <div className="post">
            <div className="post__avatar">
            <Avatar src={"https://images.pexels.com/photos/8647586/pexels-photo-8647586.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"}/>
            </div>

            <div className="post__body">
                <div className="post__header">
                    <div className="post__headertxt">
                    <h3>
                        {displayName} {" "}
                        <span className="post__headerSpecial"><VerifiedUserIcon className="badge"/> @{userName}</span> 
                    </h3>
                   
                    </div>

                    <div className="post__headermsg">
                        <p>{msg}</p>
                    </div>
                </div>
                {/* <img src="https://images.pexels.com/photos/8647586/pexels-photo-8647586.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="" /> */}
              
              <div className="footer">
                  <ChatBubbleOutlineIcon fontSize="small"/>
                  <RepeatIcon fontSize="small" />
                  <FavoriteBorderIcon fontSize="small" />
                  <PublicIcon fontSize="small" />
              </div>

            </div>
        </div>
    )
}

export default Post
