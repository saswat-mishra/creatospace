import React from "react";
import "./Login.css"
import {signInWithPopup} from 'firebase/auth'
import {auth, provider} from '../../firebase'

function Login() {
    const handleSubmit = async()=>{
       await signInWithPopup(auth, provider).then((result)=>{
           console.log(result)
       }).catch((e)=>{
           console.log(e)
       })
    }
    return (<div className="login_container">
        <div className="login_content">
        <img src={require("../../images/logo.png")} alt='logo' />
            <button onClick={handleSubmit} className="login_button">Login  ddd</button>

        </div>

    </div>
    )
}

export default Login