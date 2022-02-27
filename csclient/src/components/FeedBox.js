import { Avatar, Input } from '@material-ui/core';
import React, { useState } from 'react'
import Modal from "react-responsive-modal";
import "react-responsive-modal/styles.css"
import axios from 'axios'
import { useSelector } from 'react-redux';
import { selectUser } from '../feature/userSlice'
import "./css/feedbox.css"
import "./Header"



function FeedBox() {

    const Close = ("Close")



    const [isModalOpen, toggleModal] = useState(false)
    const [question, setQuestion] = useState("")
    const [inputUrl, setInputUrl] = useState("")

    const handleSubmit =async() => {
        if(question!==""){
            const config = {
                Headers:{
                    "Content-Type":"application/json"
                }
            }
            const body = {
                questionName:question,
                questionUrl:inputUrl,
                user:user
            }
            await axios.post('/api/questions',body, config).then((res)=>{
                console.log(res.data)
                alert(res.data.message)
                window.location.href="/"
            }).catch((e)=>{
                console.log(e)
                alert('Error in adding question')
            })

        }
    }



    const user = useSelector(selectUser)

    return (
        <div className='feedbox' onClick={() => toggleModal(true)}>
            <div className='feedbox_info'>
                <Avatar src={user?.photo}/>
                <Modal open={isModalOpen} closeIcon={Close} onClose={() => toggleModal(false)} closeOnEsc={true} center closeOnOverlayClick={false} styles={{
                    overlay: {
                        height: "auto"
                    }
                }}>
                    <div className='modal_title'>
                        <h5>Add Question</h5>
                        {/* <h5>Share Link</h5> */}
                        <br></br>
                        {/* 
                        Enter question



                        <input >
                        </input>
                        <br></br>
                        Submit */}

                    </div>
                    <div className='modal_field'>
                        <Input
                            onChange={(e) => setQuestion(e.target.value)} type='text' placeholder='Start your question here'>
                        </Input>
                        <div style={
                            {
                                display: "flex",
                                flexDirection: "column"
                            }


                        }>
                            <input type="text" placeholder="Image URL" value={inputUrl} onChange={(e) => setInputUrl(e.target.value)} style={
                                {
                                    margin: "5px 0",
                                    border: "1px solid lightgray",
                                    padding: "10px",
                                    outline: "2px solid black"
                                }
                            }>
                            </input>

                            {inputUrl !== '' && <img src={inputUrl} alt='display image' style={{
                                height: "40vh",
                                objectFit: "contain"
                            }} />}

                        </div>

                        <div className='modal_buttons'>
                            <button className='cancel' onClick={() => toggleModal(false)}>Cancel</button>
                            <button onClick={handleSubmit} type="submit" className='submit_question'>Submit</button>

                        </div>



                    </div>
                </Modal>
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