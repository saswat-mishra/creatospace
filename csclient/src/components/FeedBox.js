import React from 'react'
import { useSelector } from 'react-redux'
import { selectUser } from '../feature/userSlice'
import "./css/feedbox.css"

function FeedBox() {
    const user = useSelector(selectUser)

    return (
        <div className='feedbox'>
            <div className='feedbox_info'>
                <img src={user?.photo}/>
                {/* <Avatar/> */}

            </div>
            <div className='query_box'>
                <h5>
                    What is your question or link?

                </h5>

            </div>
            {/* FeedBox */}
        </div>
    )
}

export default FeedBox