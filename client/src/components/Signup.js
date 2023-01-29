import React, {useState} from 'react'

function SignUp({ setCurrentUser }) {
    const [formData, setFormData] = useState({
        username:'',
        email:'',
        password:''
    })
    const [errors, setErrors] = useState([])

    function onSubmit(e){
        e.preventDefault()

        fetch(`/users`,{
          method:'POST',
          headers:{'Content-Type': 'application/json'},
          body:JSON.stringify(formData)
        })
        .then(r => {
            if(r.ok){
                r.json().then(data => {
                  setCurrentUser(data)
                })
            }else {
                r.json().then(json => setErrors(json.errors))
            }
        })
       
    }

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData({ ...formData, [name]: value })
      }
    return (
      <div className='signup-form'> 
        <form id="sign-up-form" onSubmit={onSubmit}>
          <label>
          Username
          </label>  
          <input type='text' name='username' value={formData.username} onChange={handleChange} />
       
        <label>
         Email
         </label>
        <input type='text' name='email' value={formData.email} onChange={handleChange} />
       
        <label>
         Password
         </label>
        <input type='password' name='password' value={formData.password} onChange={handleChange} />
        
       
        <input type='submit' value='Sign up!' />
      </form>
      {errors? errors.map(error => <div> {error[0]} {error[1]} </div>) :null}
      </div>
    )
}

export default SignUp