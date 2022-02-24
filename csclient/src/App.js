
import React from 'react';
import { useSelector } from 'react-redux';
import './App.css';
import Creatospace from './components/Creatospace';
import { selectUser } from './feature/userSlice';
import Login from './components/auth/Login.js'

function App() {
  const user = useSelector(selectUser)
  return (
    <div className="App">
      {user ?   (<Creatospace/>) : (<Login/>)}
      {/* <Login/> */}
    
    </div>
  );
}

export default App;
