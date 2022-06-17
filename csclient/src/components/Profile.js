import React, { useState, useEffect } from 'react'
import "react-responsive-modal/styles.css"
import "./css/Profile.css";
import { Avatar, Input } from '@material-ui/core';
import axios from 'axios';import FeedBox from './FeedBox'
import Post from './Post'
import { logout, selectUser } from '../feature/userSlice';
import { useDispatch, useSelector } from 'react-redux';
import Header from './Header';

function Profile() {

    const dispatch = useDispatch()

    const user = useSelector(selectUser)

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

    return (<div className='profile' >
        <Header > </Header>
        <div className='profilecontent' style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column'
        }} >


            <Avatar src={user?.photo} style={
                { width: '150px', height: '150px' }} />

            <br></br>
            <h1> {user?.userName} </h1>
            {/* <button>Connect</button> */}

        </div>
        <div className="bottom-half">
            <h3 style={{ fontWeight: '200', marginLeft: '50px', marginTop: '10px' }}>
                Recent Posts
            </h3>
            <div className="answer-list">
            <FeedBox />
      {
        posts.map((post, index)=>(
          <Post key = {index} post = {post}/>

        ))
      }
      {/* <Post />
      <Post /> */}
            </div>
        </div>
    </div>
    )
}

export default Profile