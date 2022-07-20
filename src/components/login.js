import React, { useState, useEffect } from 'react'
import { useNavigate } from "react-router-dom"

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem('user-info')){
      //navigate("/dashboard");
    }
  }, [])
  async function login(){
    console.warn(email, password);
    let item={email,password};
    let result= await fetch("http://api.ansara.in/api/login",{
      method: 'POST',
      headers:{
        "Content-Type":"application/json",
        "Accept":"application/json"
      },
      body:JSON.stringify(item)
    }); 
    result = await result.json();
    localStorage.setItem("user-info",JSON.stringify(result))
    navigate("/dashboard")

  }
  return (
    <div className="row justify-content-center pt-5">
        <div className="col-sm-6">
          <div className="card p-4">
            <div className="from-group">
              <label>Email address: </label>
              <input type="email" className="form-control" placeholder="Enter email" onChange={(e)=>setEmail(e.target.value)} id="email"/>
            </div>
            <div className="from-group mt-3">
              <label>Password: </label>
              <input type="password" className="form-control" placeholder="Enter password" onChange={(e)=>setPassword(e.target.value)} id="pwd"/>
            </div>
            <button onClick={login} className="btn btn-primary mt-4">Login</button>
          </div>
        </div>
    </div>
  )
}

export default Login