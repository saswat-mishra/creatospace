import { Avatar } from '@material-ui/core'
import React from 'react'
import { useSelector } from 'react-redux'
import { selectUser } from '../feature/userSlice'
import "./css/feedbox.css"

function FeedBox() {
    const user = useSelector(selectUser)

    return (
        <div className='feedbox'>
            <div className='feedbox_info'>
                <Avatar src={user?.photo}/>
                {/* <Avatar/> */}
                <div className='query_box'>
                <h5>
                    What is your question ?

                </h5>

            </div>

            </div>

            {/* FeedBox */}
        </div>
    )
}

export default FeedBox