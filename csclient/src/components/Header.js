import React, { useState } from 'react'
import HomeIcon from "@material-ui/icons/Home";
import Modal from "react-responsive-modal";
import "react-responsive-modal/styles.css"
import "./css/Header.css";
function Header() {

    const [isModalOpen, toggleModal] = useState(false)
    const Close = ("Close")

    return (
        <div className='header'>
            <div className='headercontent'>
                <div className='headerlogo'>
                    <img src={require("../images/logo.png")} alt='logo'/>

                </div>
                <div className='headericons'>
                    <div className='headericon'>
                        <HomeIcon/>

                    </div>
                    {/* TODO add more icons */}

                </div>
                <div className='headerinput'>
                    <div>search icon</div>
                    <div>Search Creatospace</div>

                </div>
                <div onClick={() => toggleModal(true)}>
                    Add Question
                </div>
                <Modal open={isModalOpen} closeIcon={Close} onClose={()=>toggleModal(false)} closeOnEsc={true} center closeOnOverlayClick={false} >
                    <div className='modal_title'>
                        This is modal title
                        <br></br>

                        Enter question



                        <input >
                        </input>
                        <br></br>
                        Submit

                    </div>
                </Modal>
                
            </div>
        </div>
    )
}

export default Header