
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import Creatospace from './components/Creatospace';
import { login, selectUser } from './feature/userSlice';
import { Route, BrowserRouter, Routes } from 'react-router-dom'
import Login from './components/auth/Login.js'
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase';
import Question from './components/Question';
import Profile from './components/Profile';
import { ThemeProvider } from "@mui/material/styles";

// import { auth } from './firebase';

function App() {
  //   useEffect(() => {
  //     document.title = "Creatospace"
  //  }, []);
  const user = useSelector(selectUser)
  const dispatch = useDispatch()

  useEffect(() => {
    onAuthStateChanged(auth, (authUser) => {
      if (authUser) {
        dispatch(login({
          userName: authUser.displayName,
          photo: authUser.photoURL,
          email: authUser.email,
          uid: authUser.uid
        }))
        console.log("AuthUser", authUser)
      }
    })

  }, [dispatch])
  return (
    <div className="App">

      {/* <Login/> */}
      <BrowserRouter>

          <Routes>
            <Route exact path="/" element={user ? (<Creatospace />) : (<Login />)} />
            <Route path="/question/:id" element={<Question />} />
            <Route path="/profile" element={user ? (<Profile />) : (<Login />)} />
          </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
