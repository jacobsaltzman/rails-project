
import './App.css';
import React, { useEffect, useState } from 'react';
import { Route, Routes } from "react-router-dom";
import Footer from './components/Footer';
import Navigation from './components/Navigation';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import Login from './components/Login';
import SignUp from './components/Signup';

function App() {

  const [instruments, setInstruments] = useState([]);
  const [currentUser, setCurrentUser] = useState(false);
  const [errors, setErrors] = useState(false);
  


useEffect(()=> {
  fetch("/instruments")
  .then(res => {
    if(res.ok){
      res.json()
      .then((data) =>{
        setInstruments(data)
      })
    }else {
      res.json().then(data => setErrors(data.error))
    }
  })
  
}, []);

console.log(instruments, errors, currentUser)





  return (
    <div className="App">
      <Navigation/>


      <Routes>
        <Route
          path='/'
          element={<Home/>}
        />

        <Route/>
        <Route/>
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
      
      <Footer/>

    </div>
  );
}

export default App;
