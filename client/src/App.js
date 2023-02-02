
import './App.css';
import React, { useEffect, useState } from 'react';
import { Route, Routes } from "react-router-dom";
import Footer from './components/Footer';
import Navigation from './components/Navigation';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import Login from './components/Login';
import SignUp from './components/Signup';
import MemberPage from './components/MemberPage';
import Instruments from './components/instrument/Instruments';

function App() {

  const [instruments, setInstruments] = useState([]);
  const [currentUser, setCurrentUser] = useState(false);
  const [errors, setErrors] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);
  
  console.log(instruments, errors, currentUser)



useEffect(()=> {
  fetch("/instruments")
  .then(res => {
    if(res.ok){
      res.json()
      .then((data) =>{
        setInstruments(data)
      })
    }else {
      res.json().then(data => setErrors(data.errors))
    }
  })
  
}, []);



//const updateUser = (user) => setCurrentUser(user);

function handleDarkMode(e){
  setIsDarkMode(!isDarkMode)
}




  return (
    <div className={isDarkMode ? "App-Dark" : "App"}>
      <Navigation isDarkMode={isDarkMode} handleDarkMode={handleDarkMode} currentUser={currentUser} setCurrentUser={setCurrentUser}/>
    
      <div id='main-content'>
      <Routes>

        <Route
          path='/'
          element={<Home/>}
        />

        <Route 
        path='/members/:id'
        element={<MemberPage/>}
        />

        <Route
        path='/instruments'
        element={<Instruments instruments={instruments}/>}
        />

        <Route
        path='/signup'
        element={<SignUp setCurrentUser={setCurrentUser}/>}
        />

        <Route
          path='/login'
          element={<Login setCurrentUser={setCurrentUser} />}
        />

        <Route
          path='/about'
          element={<AboutUs/>}
        />

      </Routes>

      </div>
      
      <Footer/>

    </div>
  );
}

export default App;
