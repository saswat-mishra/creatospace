import React, { useEffect, useState } from 'react'
import FeedBox from './FeedBox'
import './css/feed.css'
import Post from './Post'
import axios from 'axios'
import { prototype } from 'quill-delta'
// axios.defaults.port = 80;
// const url = 'http://localhost:80'

function Feed() {
  const [posts, setPosts] = useState([])
  useEffect(() => {
    axios
    .get('/api/questions')
    .then((res) => {
      console.log(res.data.reverse())
      setPosts(res.data)
    })
    .catch((e) => {
      console.log(e)
    })
    
  }, [])
  return (
    <div className='feed'>
      <FeedBox />
      {
        posts.map((post, index)=>(
          <Post key = {index} post = {post}/>

        ))
      }
      {/* <Post />
      <Post /> */}

    </div>
  )
}

export default Feed