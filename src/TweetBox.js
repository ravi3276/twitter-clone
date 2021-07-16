import { Button } from '@material-ui/core'
import { Avatar } from '@material-ui/core'
import React,{useState} from 'react'
import './TweetBox.css';
import db from './firebase';
function TweetBox() {
    const [tweet,setTweet]=useState('');
    const [img,setImg]=useState('');
  const  sendTweet=(e)=>{
      e.preventDefault();
        db.collection('posts').add({
            displayName:'ravi27',
            userName:'raviteja3276',
            msg:tweet,
            image:img,
            verified:true
        });
        setTweet('');
        setImg('');
    }
    return (
        <div className="tweetBox">
            <form>
                <div className="tweetBox__input">
                    <Avatar src="https://images.pexels.com/photos/8647586/pexels-photo-8647586.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"/>
                    <input type="text" placeholder="whats happening?" value={tweet} onChange={(e)=>setTweet(e.target.value)}/>
                </div>
                    <input className="tweetBox__imgurl" type="text" placeholder="Optional: Enter image URL"
                     value={img} onChange={(e)=>setImg(e.target.value)}/>
                <Button className="tweetBox__btn" onClick={sendTweet}>Tweet</Button>
            </form>
        </div>
    )
}

export default TweetBox
