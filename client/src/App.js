
import './App.css';
import React, { useEffect, useState } from 'react';
import { Route, Routes } from "react-router-dom";
import Footer from './components/Footer';

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
      <header className="App-header">
          <p> testing, testing</p>
      </header>

      <Routes>

        <Route/>
        <Route/>
        <Route/>

      </Routes>
      <Footer/>

    </div>
  );
}

export default App;
