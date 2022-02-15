import React from 'react'
import "./css/post.css"


function Post() {
    return (
        <div className='post'>
            <div className='post_info'>
                Avatar
                <h4>User Name</h4>
                <small>Timestamp</small>


            </div>
            <div className='post_body'>
                <p>
                    Test Question?
                </p>
                <button className='post_answer'>
                    Answer
                </button>
            </div>
            <div className='post_footer'>
                <div className='post_footer_action'>
                    Upvote
                </div>
                <div className='post_footer_action'>
                    Downvote
                </div>
                <div className='post_footer_action'>
                    Comment
                </div>

                <div className='post_footer_right'>
                    Share
                    <br />
                    More

                </div>

            </div>

            <p>
                3 Answers
            </p>

            <div className='post_answer'>
                <div className='post_answer_container'>
                    <div className='post_answered'>
                        Avatar
                        <div className='post_info'>
                            <p>
                                User Name
                            </p>
                            <span>
                                Timestamp
                            </span>

                        </div>


                    </div>
                    <div className='post_answer'>
                            Test answer
                    </div>


                </div>

            </div>

        </div>
    )
}

export default Post