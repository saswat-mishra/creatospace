import React from 'react'
import "./css/SidebarOptions.css"

function SidebarOptions() {
    return (
        <div className='sidebar_options'>
            Topics

            <div className='sidebar_option'>
                {/* <img src="https://trcstaffing.com/wp-content/uploads/2020/03/finance-square.png" /> */}
                <p>Finance</p>

            </div>

            <div className='sidebar_option'>
                {/* <img src="https://imageio.forbes.com/specials-images/imageserve/5ea6d49e165a170006a5d625/Golden-bitcoin-background/960x0.jpg?fit=bounds&format=jpg&width=200" /> */}
                <p>Crypto</p>

            </div>
            <div className='sidebar_option'>
                {/* <img src="https://www.kindpng.com/picc/m/75-755059_icon-digital-enertia-icondigitalmarketing-marketing-icon-png-black.png" /> */}
                <p>Marketing</p>

            </div>
            <div className='sidebar_option'>
                {/* <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRF16oMQBP5OEsWqM1LlYHRi-NB8FTMjev-mw&usqp=CAU" /> */}
                <p>AI/ML</p>

            </div>
        </div>
    )
}

export default SidebarOptions