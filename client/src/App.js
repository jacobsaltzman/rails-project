
import './App.css';
import React, { useEffect, useState } from 'react';
import { Route, Routes } from "react-router-dom";
import Footer from './components/Footer';
import Navigation from './components/Navigation';
import Home from './components/Home';
import AboutUs from './components/AboutUs';

function App() {

  const [instruments, setInstruments] = useState([]);
  const [errors, setErrors] = useState(false);
  //const [currentUser, setCurrentUser] = useState(false);


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

console.log(instruments, errors)





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
          path='/about'
          element={<AboutUs/>}
        />
      </Routes>
      
      <Footer/>

    </div>
  );
}

export default App;
