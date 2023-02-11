import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';



function InstrumentCreate({onAddInstrument}){

  const nav = useNavigate();
  const [errors, setErrors] = useState([])
  const[formData, setFormData] = useState({
    name: "",
    condition: "Coming soon!",
    image: "",
    description: ""
  })

  function handleChange(e) {
    const {name, value} = e.target;
    setFormData((formData) => ({...formData, [name]: value}))
  }

  function handleSubmit(e) {
    e.preventDefault();

    fetch('/instruments', {
    method: "POST",
    headers: {
      'Content-Type': 'application/json',
      'Accepts': 'application/json'
    },
    body: JSON.stringify(formData)
  })
  .then(r => {
    if(r.ok){
        r.json().then(data => {
          onAddInstrument(data)
          setErrors([])
          nav(`/instruments/${data.id}`)
          alert("Added to the Instrument DB! Please bring the instrument to location [x] at your earliest convenience. Our Musician Librarians will tune up the instrument so we can then start lending it out to our members. Thanks for contributing! ");
        })
    }else {
        r.json().then(json => setErrors(json.error))
    }
    })
  };


  return(
    <div id='create-instrument'>
      
    <form className="new-instrument-form" onSubmit={handleSubmit}>
        <h4>Donate An Instrument To The Library</h4>

        <label>Write What Kind Of Instrument You Are Donating</label>
        <input type="text" id="name" name="name" onChange={handleChange} value={formData.name}/>

        <label>Submit An Image URL If You Have One</label>
        <input type="text" id="image" name="image" onChange={handleChange} value={formData.image}></input>

        <label>Write A Description Of The Instrument</label>
        <input type="text" id="description" name="description" onChange={handleChange} value={formData.description}></input>

        <button type="submit">Donate</button>
      </form>

      <h6>{errors}</h6>

    </div>
  )


}

export default InstrumentCreate;