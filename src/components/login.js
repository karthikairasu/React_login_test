import React, { useState } from 'react'
import AuthUser from './AuthUser';

function Login() {
  const {http} = AuthUser();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
 
  const  submitForm = () => {
    console.log(email +' '+ password);
    http.post('/login',{email:email,password:password}).then((res) => {
     console.log(res.data);
    });
  }

  return (
    <div className="row justify-content-center pt-5">
        <div className="col-sm-6">
          <div className="card p-4">
            <div className="from-group">
              <label>Email address: </label>
              <input type="email" className="form-control" placeholder="Enter email" onChange={e=>setEmail(e.target.value)} id="email"/>
            </div>
            <div className="from-group mt-3">
              <label>Password: </label>
              <input type="password" className="form-control" placeholder="Enter password" onChange={e=>setPassword(e.target.value)} id="pwd"/>
            </div>
            <button type="button" onClick={submitForm} className="btn btn-primary mt-4">Login</button>
          </div>
        </div>
    </div>
  )
}

export default Login