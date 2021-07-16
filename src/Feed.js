import React,{useState,useEffect} from 'react'
import './Feed.css'
import Post from './Post'
import TweetBox from './TweetBox'
import db from './firebase';
import FlipMove from 'react-flip-move';

function Feed() {
    const [posts,setPosts]=useState([]);

    useEffect(() => {
       db.collection('posts').onSnapshot(snapshot =>(
           setPosts(snapshot.docs.map(doc=>doc.data()))
       ))
    }, [])
    
    return (
        <div className="feed">
            <div className="feed__header">
            <h2>Home</h2>
            </div>

           <TweetBox />
            <FlipMove>
           {
               posts.map(post =>(
                <Post 
                key={post.msg}
                avatar={post.avatar}
                displayName={post.displayName} 
                userName={post.userName}
                msg={post.msg}
                image={post.image}
                verified={post.verified}
                // timestamp={new Date()}
                />
               ))
           }

            </FlipMove>
        </div>
    )
}

export default Feed
