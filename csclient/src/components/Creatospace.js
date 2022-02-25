import React from 'react'
import Header from './Header'
import Sidebar from './Sidebar'
import "./css/Creatospace.css";
import Feed from './Feed';
import Widget from './Widget';

function Creatospace() {
    return (
        <div className='creatospace'>
            {/* Creatospace */}
            <Header></Header>

            <div className='contents'>
                <div className='content'>
                    <Sidebar/>
                    <Feed/>
                    {/* <Widget/> */}

                </div>

            </div>
        </div>
    )
}

export default Creatospace