import React, { useState } from 'react'
import "./css/post.css"
import Modal from "react-responsive-modal";
import "react-responsive-modal/styles.css"
// import ReactQuill, { Quill } from "quill"
import ReactQuill from 'react-quill'
import 'quill/dist/quill.snow.css'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faArrowUp, faArrowDown } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios';
// import ReactHtmlParser from 'html-react-parser'
import { useSelector } from 'react-redux';
import { selectUser } from '../feature/userSlice';
import { Avatar } from '@material-ui/core';
import TimeAgo from 'javascript-time-ago'
import ReactTimeAgo from "react-time-ago";
import en from 'javascript-time-ago/locale/en.json'
TimeAgo.addDefaultLocale(en)

function LastSeen({ date }) {
    return (
        <div>
            <ReactTimeAgo date={date} timeStyle="round" />
        </div>
    );
}


function Post({ post }) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [answer, setAnswer] = useState("")
    const Close = ("Close")
    const user = useSelector(selectUser)

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
            questionId: post?._id,
            user: user
        }
        if (post?._id && answer !== "") {
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
                <div className='post_header'>

                    <Avatar src={post?.user?.photo} />
                    <div className='label'>
                        <h4>{post?.user?.userName}</h4>

                        <small >
                            <LastSeen date={post?.createdAt} />
                        </small>
                    </div>

                </div>

                <button style={{ float: "right" }} className='post_answer_btn' onClick={() => setIsModalOpen(true)}>
                    Answer
                </button>


            </div>
            <div className='post_body'>
                <div className='post_question'>

                    <p  onClick={event =>  window.location.href="/question/"+post?._id}>
                        {post?.questionName}
                    </p>



                    <Modal open={isModalOpen} closeIcon={Close} onClose={() => setIsModalOpen(false)} closeOnEsc={true} center closeOnOverlayClick={false} styles={{
                        overlay: {
                            height: "auto"
                        }
                    }}>
                        <div className='modal_question'>
                            <h1>{post?.questionName}</h1>
                            <p>Asked by <span>{post?.user?.userName}</span></p>

                        </div>

                        <div className='modal_answer'>
                            <br></br>

                            {/* <Quill></Quill> */}
                            <ReactQuill value={answer} onChange={handleQuill} placeholder="Enter your answer"></ReactQuill>

                        </div>

                        <div className='modal_buttons damn'>
                            <button className='cancel' onClick={() => setIsModalOpen(false)}>Cancel</button>
                            <button onClick={handleSubmit} type="submit" className='submit_question'>Submit</button>

                        </div>
                        {/* Test modal */}
                    </Modal>
                </div>
                {post && (post?.questionUrl !== "") && <img src={post.questionUrl} alt='url'></img>}

            </div>
            {/* <div className='post_footer'>
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

            </div> */}

            <p style={{"margin-top":"5px"}}>
                {post?.allAnswers.length} {post?.allAnswers.length === 1 ? "Answer" : "Answers"}
            </p>


        </div>
    )
}

export default Post