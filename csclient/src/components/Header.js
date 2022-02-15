import React from 'react'
import HomeIcon from "@material-ui/icons/Home";
import "./css/Header.css";
function Header() {
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
            </div>
        </div>
    )
}

export default Header