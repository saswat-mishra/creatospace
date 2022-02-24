import React, { useState } from 'react'
import "./css/post.css"
import Modal from "react-responsive-modal";
import "react-responsive-modal/styles.css"
// import ReactQuill, { Quill } from "quill"
import ReactQuill from 'react-quill'
import 'quill/dist/quill.snow.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUpLong, faArrowUp, faArrowDown } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios';
import ReactHtmlParser from 'html-react-parser'



function Post({ post }) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [answer, setAnswer] = useState("")
    const Close = ("Close")

    const handleQuill = (value) => {
        setAnswer(value)
        // console.log(answer)
    }

    const handleSubmit = async () => {
        const config = {
            headers: {
                "Content-Type": "application/json"
            }
        }

        const body = {
            answer: answer,
            questionId: post?._id
        }
        if (post?._id && answer != "") {
            await axios.post('/api/answers', body, config).then((res) => {
                console.log(res.data)
                alert("Answer added succesfully")
                setIsModalOpen(false)
                window.location.href = '/'
            }).catch((e) => {
                console.log(e)
            })
        }

    }

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
                        {post?.questionName}
                    </p>


                    <button className='post_answer' onClick={() => setIsModalOpen(true)}>
                        Answer
                    </button>
                    <Modal open={isModalOpen} closeIcon={Close} onClose={() => setIsModalOpen(false)} closeOnEsc={true} center closeOnOverlayClick={false} styles={{
                        overlay: {
                            height: "auto"
                        }
                    }}>
                        <div className='modal_question'>
                            <h1>This is test question</h1>
                            <p>Asked by <span>Username</span> on timestamp</p>

                        </div>

                        <div className='modal_answer'>

                            {/* <Quill></Quill> */}
                            <ReactQuill value={answer} onChange={handleQuill} placeholder="Enter your answer"></ReactQuill>

                        </div>

                        <div className='modal_buttons'>
                            <button className='cancel' onClick={() => setIsModalOpen(false)}>Cancel</button>
                            <button onClick={handleSubmit} type="submit" className='submit_question'>Submit</button>

                        </div>
                        Test modal
                    </Modal>
                </div>
                {(post?.questionUrl != "") && <img src={post.questionUrl} alt='url'></img>}

            </div>
            <div className='post_footer'>
                <div className='post_footer_action'>
                    <FontAwesomeIcon icon={faArrowUp} />

                </div>
                <div className='post_footer_action'>
                    <FontAwesomeIcon icon={faArrowDown} />
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
                {post?.allAnswers.length} {post?.allAnswers.length == 1 ? "Answer" : "Answers"}
            </p>

            <div className='post_answer'>
                <div className='post_answer_container'>
                    {
                        post?.allAnswers?.map((_a) => (

                            <div className='post_answered'>
                                <div className='post_answer'>
                                    {ReactHtmlParser(_a?.answer)}
                                </div>
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

                        ))
                    }




                </div>

            </div>

        </div>
    )
}

export default Post