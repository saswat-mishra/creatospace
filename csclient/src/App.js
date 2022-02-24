
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import Creatospace from './components/Creatospace';
import { login, selectUser } from './feature/userSlice';
import Login from './components/auth/Login.js'
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase';
// import { auth } from './firebase';

function App() {
  const user = useSelector(selectUser)
  const dispatch = useDispatch()

  useEffect(()=>{
    onAuthStateChanged(auth, (authUser)=>{
      if(authUser){
        dispatch(login({
          userName: authUser.displayName,
          photo: authUser.photoURL,
          email: authUser.email,
          uid : authUser.uid
        }))
        console.log("AuthUser",authUser)
      }
    })

  }, [dispatch])
  return (
    <div className="App">
      {user ?   (<Creatospace/>) : (<Login/>)}
      {/* <Login/> */}
    
    </div>
  );
}

export default App;
