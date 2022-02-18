import React, { useState } from 'react'
import "./css/post.css"
import Modal from "react-responsive-modal";
import "react-responsive-modal/styles.css"
import ReactQuill, { Quill } from "quill"
import 'quill/dist/quill.snow.css'



function Post() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const Close = ("Close")
    return (
        <div className='post'>
            <div className='post_info'>
                Avatar
                <h4>User Name</h4>
                <small>Timestamp</small>


            </div>
            <div className='post_body'>
                <div className='post_question'>

                    <p>
                        Test Question?
                    </p>

                    <button className='post_answer' onClick={() => setIsModalOpen(true)}>
                        Answer
                    </button>
                    <Modal open={isModalOpen} closeIcon={Close} onClose={() => setIsModalOpen(false)} closeOnEsc={true} center closeOnOverlayClick={false} styles={{overlay:{
                    height:"auto"
                }}}>
                        <div className='modal_question'>
                            <h1>This is test question</h1>
                            <p>Asked by <span>Username</span> on timestamp</p>

                        </div>

                        <div className='modal_answer'>

                        {/* <Quill></Quill> */}

                        </div>

                        <div className='modal_buttons'>
                            <button className='cancel' onClick={() => setIsModalOpen(false)}>Cancel</button>
                            <button type="submit" className='submit_question'>Submit</button>

                        </div>
                        Test modal
                    </Modal>
                </div>

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