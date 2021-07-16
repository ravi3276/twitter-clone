import React,{forwardRef} from 'react'
import { Avatar } from '@material-ui/core'
import './Post.css';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import RepeatIcon from '@material-ui/icons/Repeat';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import PublicIcon from '@material-ui/icons/Public';
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';

const Post=forwardRef(({avatar,verified,displayName,userName,image,msg},ref)=> {
    return (
        <div className="post" ref={ref}>
            <div className="post__avatar">
            <Avatar src={avatar}/>
            </div>

            <div className="post__body">
                <div className="post__header">
                    <div className="post__headertxt">
                    <h3>
                        {displayName} {" "}
                        <span className="post__headerSpecial">
                            {
                                verified && <VerifiedUserIcon className="badge"/>
                            }
                             @{userName}
                             </span> 
                    </h3>
                   
                    </div>

                    <div className="post__headermsg">
                        <p>{msg}</p>
                    </div>
                </div>
                <img src={image} alt="" />
              
              <div className="footer">
                  <ChatBubbleOutlineIcon fontSize="small"/>
                  <RepeatIcon fontSize="small" />
                  <FavoriteBorderIcon fontSize="small" />
                  <PublicIcon fontSize="small" />
              </div>

            </div>
        </div>
    )
})

export default Post
