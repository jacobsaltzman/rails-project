import React, {useState} from 'react';
import { Link } from 'react-router-dom';



function Login({ setCurrentUser }){

  const [formData, setFormData] = useState({
    username:'',
    password:''
})
  const [errors, setErrors] = useState([])

  function handleChange(e) {
    const {name, value} = e.target;
    setFormData((formData) => ({...formData, [name]: value}))
  }

  function handleSubmit(e){
    e.preventDefault()

    fetch(`/login`,{
      method:'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accepts': 'application/json'
      },
      body:JSON.stringify(formData)
    })
    .then(r => {
      if(r.ok){
          r.json().then(data => {
            setCurrentUser(data)
            setErrors([])
            })
        }else {
            r.json().then(json => setErrors(json.error))
            
        }
        setFormData({
          username:'',
          password:''
        });
        //console.log(errors)
    })
   
}


  return(
    <div className="login">
      <div>
        <h4>Sign In</h4>
          <form id="sign-in-form" onSubmit={handleSubmit}>
            <label>Username:</label>
            <input type='text' id='username-input' name='username' onChange={handleChange} value={formData.username}></input>
            <label>Password:</label>
            <input type='password' id='password-input' name='password' onChange={handleChange}  value={formData.password}></input>
            <button type="submit">Submit</button>
          </form>
          {errors? <h6 className='errors'>{errors}</h6>:null}
          <h6>Not a member? <Link to="/signup">Signup!</Link> </h6>
      </div>
    </div>
  )
}

export default Login;