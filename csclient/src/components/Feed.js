import React from 'react'
import FeedBox from './FeedBox'
import './css/feed.css'
import Post from './Post'

function Feed() {
  return (
    <div className='feed'>
        <FeedBox/>
        <Post/>
    </div>
  )
}

export default Feed