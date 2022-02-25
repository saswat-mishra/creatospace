import React, { useState } from 'react'
import HomeIcon from "@material-ui/icons/Home";
import Modal from "react-responsive-modal";
import "react-responsive-modal/styles.css"
import "./css/Header.css";
import { Avatar, Input } from '@material-ui/core';
import axios from 'axios';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase';
import { logout, selectUser } from '../feature/userSlice';
import { useDispatch, useSelector } from 'react-redux';
function Header() {

    const [isModalOpen, toggleModal] = useState(false)
    const [inputUrl, setInputUrl] = useState("")
    const [question, setQuestion] = useState("")

    const Close = ("Close")
    const dispatch = useDispatch()

    const user = useSelector(selectUser)

    const handleLogout = () => {
        if(window.confirm("Ado you want to log out?")){
            signOut(auth).then(()=>{
                dispatch(logout())
            })

        }
        
    }

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


    return (
        <div className='header'>
            <div className='headercontent'>
                <div className='headerlogo'>
                    <img src={require("../images/logo.png")} alt='logo' />

                </div>
                <div className='headericons'>
                    <div className='headericon'>
                        {/* <HomeIcon /> */}

                    </div>
                    {/* TODO add more icons */}

                </div>
                <div className='headerinput'>
                    {/* <div>search icon</div> */}
                    {/* <div>Search Creatospace</div> */}

                </div>
                <div className='btn' onClick={() => toggleModal(true)}>
                    Add Question
                </div>

                <div className='btn' onClick={handleLogout}> Logout </div>
                
                <Avatar src={user?.photo}/>

                
                

                <Modal open={isModalOpen} closeIcon={Close} onClose={() => toggleModal(false)} closeOnEsc={true} center closeOnOverlayClick={false} styles={{
                    overlay: {
                        height: "auto"
                    }
                }}>
                    <div className='modal_title'>
                        <h5>Add Question</h5>
                        <h5>Share Link</h5>
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

            </div>
        </div>
    )
}

export default Header