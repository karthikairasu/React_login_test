import React, {useRef, useState, useEffect } from 'react';

const Login = () => {
   const userRef = useRef();
   const errRef = useRef();

   const [user, setUser] = useState('');
   const [pwd, setPwd] = useState('');
   const [errMsg, setErrMsg] = useState('');
   const [success, setSuccess] = useState(false);
   
   useEffect(() =>{
      userRef.current.focus();
   }, [])
   
   useEffect(() => {
      setErrMsg('');
   }, [user, pwd])

   const handleSubmit = async (e) => {
      e.preventDefault();
      console.log(user, pwd);
      setUser('');
      setPwd('');
      setSuccess(true);
   }

  return (
    <>
    {success ?(
      <section>
        <h1>You are logged in!</h1>
        <br/>
        <p>
          <a href="#">Go to Home</a>
        </p>
      </section>
    ) : (
    <section>
      <div className='row justify-content-center mt-5'>
        <div className="col-sm-6">
        <div className='card p-4'>
        <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
        <h3>Sign In</h3>
        <form onSubmit={handleSubmit}>
          <div className='form-group'>
          <label htmlFor="username">Username:</label>
          <input 
            type="text"
            id="username"
            ref={userRef}
            autoComplete="off"
            onChange={(e) => setUser(e.target.value)}
            value={user}
            required
            className='form-control'
          />
          </div>

          <div className='form-group mt-3'>
          <label htmlFor="password">Password:</label>
          <input 
            type="password"
            id="password"
            onChange={(e) => setPwd(e.target.value)}
            value={pwd}
            required
            className='form-control'
          />
          </div>
          <div className='form-group text-center'>
            <button className='btn btn-primary mt-4'>Sign In</button>
          </div>
        </form>
        </div>
        </div>
      </div>
    </section>
    )}
    </>
  )
}

export default Login